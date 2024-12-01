import pandas as pd
from app.services.preprocess import extract_emojis, parse_message
from app.services.wordcloud import word_cloud_to_base64

from app.utils.phone_type import get_phone_type
import app.utils.constants as c
import re
from app.utils.zscore import zscore
from app.utils.time import check_dayfirst, parse_datetime


class WhatsAppChat:
    def __init__(self, chats: str, year: int = None):
        self.df = (
            self._parse_chats(chats) if year is None else self._get_year_x(chats, year)
        )

    def _parse_chats(self, chats: str) -> pd.DataFrame:
        """Parse chats into a df
        Args:
            chats (str): chats in string format
        Returns:
            DataFrame: chats in dataframe format
        """
        chats = re.split("\n", chats)
        new_chats = []
        phone_type = get_phone_type(chats[0])
        c_idx = 0
        i = 0

        while i < len(chats):
            chats[i] = (
                chats[i]
                .strip()
                .replace("\u200e", "")
                .replace("\r", "")
                .replace("\u202f", "")
            )
            new_chats.append(chats[i])
            i += 1
            while i < len(chats) and not bool(re.search(c.REGEX[phone_type], chats[i])):
                new_chats[c_idx] += "\n" + chats[i]
                i += 1
            c_idx += 1

        chats_df = pd.DataFrame(new_chats, columns=["chats"])
        chats_df = chats_df["chats"].apply(parse_message, args=(phone_type,))
        chats_df = pd.DataFrame(
            chats_df.tolist(), columns=["time", "sender", "message"]
        )

        chats_df.columns = ["time", "sender", "message"]

        dayfirst = check_dayfirst(chats_df["time"])
        chats_df["time"] = chats_df["time"].apply(parse_datetime, args=(dayfirst,))

        # extra columns
        chats_df["month"] = chats_df["time"].dt.month
        chats_df["date"] = chats_df["time"].dt.date

        chats_df.dropna(inplace=True)
        chats_df.reset_index(drop=True, inplace=True)

        return chats_df

    def _get_year_x(self, chats: str, year: int) -> pd.DataFrame:
        """Get chats of a particular year
        Args:
            year (int): year
        Returns:
            DataFrame: chats of that year
        """
        chats_df = self._parse_chats(chats)
        chats_df = chats_df[chats_df["time"].dt.year == year]
        chats_df.reset_index(drop=True, inplace=True)
        return chats_df

    def get_chat_members(self):
        members = self.df["sender"].unique().tolist()
        members = [member for member in members if str(member) != "nan"]
        return members

    def get_no_of_messages(self):
        return len(self.df)

    def get_no_of_messages_per_member(self):
        members = self.df["sender"].value_counts().to_dict()
        members = [{"member": x, "count": members[x]} for x in members]
        return members

    def get_no_of_messages_per_month(self) -> tuple:
        m_count = self.df["month"].value_counts().to_dict()
        months = [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ]

        month_count = [{"month": x, "count": 0} for x in months]

        for mc in m_count:
            month_count[mc - 1]["count"] = m_count[mc]

        month_df = pd.DataFrame(month_count)
        month_df["month_codes"] = pd.Series(range(1, 13))
        month_corr = month_df["month_codes"].corr(month_df["count"])
        return month_count, month_corr

    def get_no_of_days_talked(self) -> int:
        return len(self.df["date"].unique())

    def get_most_used_emojis(self, top: int = 5):
        emojis = self.df["message"].apply(extract_emojis)
        emojis = emojis[emojis != ""]
        emojis = emojis.str.cat(sep="")
        emojis = (
            emojis.replace("\U0001f3fb", "")
            .replace("\U0001f3fc", "")
            .replace("\U0001f3fd", "")
            .replace("\U0001f3fe", "")
            .replace("\U0001f3ff", "")
        )
        emojis = pd.Series(list(emojis))
        emojis = emojis.value_counts().to_dict()
        top_emojis = sorted(emojis, key=emojis.get, reverse=True)[:top]
        return top_emojis

    def get_no_of_messages_per_hour(self):
        hours = self.df["time"].dt.hour.value_counts().to_dict()
        hours = [{"hour": x, "count": hours[x]} for x in hours]
        return hours

    def get_no_of_messages_per_day(self):
        days = self.df["time"].dt.day_name().value_counts().to_dict()
        days = [{"day": x, "count": days[x]} for x in days]
        return days

    def get_most_active_date(self):
        return self.df["date"].value_counts().idxmax()

    def get_longest_gap(self):
        dates = self.df["date"].unique()
        dates.sort()
        longest_gap = 0
        start_date = None
        end_date = None
        for i in range(len(dates) - 1):
            gap = (dates[i + 1] - dates[i]).days
            if gap > longest_gap:
                longest_gap = gap
                start_date = dates[i]
                end_date = dates[i + 1]
        return {
            "length": longest_gap,
            "start_date": start_date,
            "end_date": end_date,
        }

    def get_longest_session(self):
        streak = {
            "total_time": 0,
            "start_time": None,
            "end_time": None,
            "total_messages": 0,
            "avg_reply_time": 0,
        }

        start_time = None
        end_time = None
        total_messages = 0
        total_time = 0

        for i in range(len(self.df) - 1):
            time_diff = self.df.iloc[i + 1]["time"] - self.df.iloc[i]["time"]
            if time_diff.total_seconds() / 60 <= 5:
                if start_time is None:
                    start_time = self.df.iloc[i]["time"]
                end_time = self.df.iloc[i + 1]["time"]
                total_messages += 1
                total_time = end_time - start_time
            else:
                if total_messages > streak["total_messages"]:
                    streak["total_messages"] = total_messages
                    streak["start_time"] = start_time
                    streak["end_time"] = end_time
                    streak["avg_reply_time"] = total_time / total_messages
                    streak["total_time"] = total_time
                start_time = None
                end_time = None
                total_messages = 0
                total_time = 0

        return streak

    def get_who_texts_first(self):
        time_diff = self.df["time"].diff().dt.total_seconds() / 3600
        time_diff = time_diff[time_diff > 5]
        first_texters = self.df.iloc[time_diff.index - 1]["sender"].value_counts()
        first_texter = first_texters.idxmax()
        return first_texter

    def get_top_percent(self):
        total_chats = self.get_no_of_messages()
        z, p = zscore(total_chats)
        top_percent = 1 - p
        return top_percent

    def get_wordcloud(self):
        return word_cloud_to_base64(self.df)

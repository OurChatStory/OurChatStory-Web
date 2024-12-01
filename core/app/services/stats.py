from app.services.chats import WhatsAppChat
from app.utils.constants import (
    LOG,
    MAX_EMOJIS,
    MIN_CHATS_REQUIRED,
    MIN_MEMBERS_REQUIRED,
    YEAR,
)
from app.utils.logging import log_metadata


def get_wrap(chats: str) -> dict:
    wc = WhatsAppChat(chats, YEAR)

    chat_members = wc.get_chat_members()
    if len(chat_members) < MIN_MEMBERS_REQUIRED:
        raise Exception(
            "Not enough members ("
            + str(len(chat_members))
            + ") to analyze from "
            + str(YEAR)
        )

    is_group = len(chat_members) > 2

    total_chats = wc.get_no_of_messages()
    if total_chats < MIN_CHATS_REQUIRED:
        raise Exception("Not enough chats to analyze from " + str(YEAR))

    no_of_messages_per_member = wc.get_no_of_messages_per_member()
    most_active_member = max(no_of_messages_per_member, key=lambda x: x["count"])
    texts_first = wc.get_who_texts_first()

    total_days_talked = wc.get_no_of_days_talked()
    most_active_date = wc.get_most_active_date()

    monthly_count, month_corr = wc.get_no_of_messages_per_month()
    most_active_month = max(monthly_count, key=lambda x: x["count"])

    day_count = wc.get_no_of_messages_per_day()
    most_active_day = max(day_count, key=lambda x: x["count"])

    hourly_count = wc.get_no_of_messages_per_hour()
    most_active_hour = max(hourly_count, key=lambda x: x["count"])

    top_emojis = wc.get_most_used_emojis(MAX_EMOJIS)

    top_percent = wc.get_top_percent()

    longest_gap = wc.get_longest_gap()

    longest_session = wc.get_longest_session()

    wordcloud = wc.get_wordcloud()

    stats = {
        "group": is_group,
        "members": chat_members,
        "total_no_of_chats": total_chats,
        "total_days_talked": total_days_talked,
        "most_active_date": most_active_date,
        "no_of_messages_per_member": no_of_messages_per_member,
        "most_active_member": most_active_member,
        "who_texts_first": texts_first,
        "monthly_chats_count": monthly_count,
        "most_active_month": most_active_month,
        "month_correlation": month_corr,
        "day_count": day_count,
        "most_active_day": most_active_day,
        "hourly_count": hourly_count,
        "most_active_hour": most_active_hour,
        "top_emojis": top_emojis,
        "top_percent": top_percent,
        "longest_gap": longest_gap,
        "longest_session": longest_session,
        "wordcloud": wordcloud,
    }

    if LOG == 1:
        log_metadata(stats)

    return stats

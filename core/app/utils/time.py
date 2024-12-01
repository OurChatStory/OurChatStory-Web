# parse a string in different country's dattime formates to return a datetime object

import datetime
import re


def parse_datetime(
    s: str,
    dayfirst: bool = True,
) -> datetime.datetime:
    # parse a string in different country's dattime formates to return a datetime object
    # s: string to be parsed
    # return: datetime object
    # example: parse_datetime('23/03/22, 5:59 pm')
    # example: parse_datetime('23.03.22, 5:59 am')
    # example: parse_datetime('23-03-22, 5:59 pm')
    # example: parse_datetime('23.03.22, 5.59 pm')
    # example: parse_datetime('23.03.22, 5:59')
    # example: parse_datetime('23-03-22, 5.59 pm')
    # example: parse_datetime('03-23-22, 5:59')
    # example: parse_datetime('04/07/20, 15:20:25')
    # example: parse_datetime('04/07/20, 5:20:25 pm')
    # example: parse_datetime('04/07/20, 5:20:25 am')

    # replace invisible charcaters with space
    s = re.sub(r"\s+", " ", s)

    # compile regex pattern to match date and time formats
    regex = re.compile(
        r"(\d{1,2})[\/\.-](\d{1,2})[\/\.-](\d{2,4})[ ,]*(\d{1,2})[:\.](\d{1,2})[:\.]?(\d{1,2})?[ ]?([ap]m)?"
    )

    # match the string with the regex pattern
    match = regex.match(s)

    # if match found
    if match:
        # extract the date and time from the string
        day = int(match.group(1))
        month = int(match.group(2))
        year = int(match.group(3))
        hour = int(match.group(4))
        minute = int(match.group(5))
        second = int(match.group(6)) if match.group(6) else 0
        ampm = match.group(7)

        # if year is 2 digit, convert it to 4 digit
        if year < 100:
            if year <= datetime.datetime.now().year % 100:
                year += 2000
            else:
                year += 1900

        # if ampm is present, convert 12 hour format to 24 hour format
        if ampm:
            if ampm == "pm" and hour < 12:
                hour += 12
            elif ampm == "am" and hour == 12:
                hour = 0

        # return the datetime object
        try:
            if dayfirst:
                return datetime.datetime(year, month, day, hour, minute, second)
            else:
                return datetime.datetime(year, day, month, hour, minute, second)
        except ValueError:
            return None

    # if match not found
    else:
        # return None
        return None


# test the function
# print("1.", parse_datetime("23/03/22, 5:59 pm"))
# print("2.", parse_datetime("23.03.22, 5:59 am"))
# print("3.", parse_datetime("23-03-22, 5:59 pm"))
# print("4.", parse_datetime("23.03.22, 5.59 pm"))
# print("5.", parse_datetime("23.03.22, 5:59"))
# print("6.", parse_datetime("23-03-22, 5.59 pm"))
# print("7.", parse_datetime("03-23-22, 5:59", dayfirst=False))
# print("8.", parse_datetime("04/07/20, 15:20:25"))
# print("9.", parse_datetime("07/23/20, 15:20:25", dayfirst=False))
# print("10.", parse_datetime("07/23/20, 05:20:25 pm", dayfirst=False))
# print("11.", parse_datetime("20/03/22, 4:25 pm", dayfirst=True))


# output
# 1. 2022-03-23 17:59:00
# 2. 2022-03-23 05:59:00
# 3. 2022-03-23 17:59:00
# 4. 2022-03-23 17:59:00
# 5. 2022-03-23 05:59:00
# 6. 2022-03-23 17:59:00
# 7. 2022-03-23 05:59:00
# 8. 2020-07-04 15:20:25
# 9. 2020-07-23 15:20:25
# 10. 2020-07-23 17:20:25
# 11. 2022-03-20 16:25:00


# from an array of dates find out if the dates are dayfirst or monthfirst
def check_dayfirst(dates: list) -> bool:
    # example input: ['23/03/22, 5:59 pm', '23.03.22, 5:59 am', '23-03-22, 5:59 pm', '23.03.22, 5.59 pm', '23.03.22, 5:59', '23-03-22, 5.59 pm', '03-23-22, 5:59', '04/07/20, 15:20:25', '04/07/20, 5:20:25 pm', '04/07/20, 5:20:25 am']
    # example output: True

    # count the number of dates that are parsed correctly when dayfirst is True
    count_dayfirst = 0

    # count the number of dates that are parsed correctly when dayfirst is False
    count_monthfirst = 0

    # loop through all the dates
    for date in dates:
        # parse the date with dayfirst=True
        parsed_date_dayfirst = parse_datetime(date, dayfirst=True)

        # parse the date with dayfirst=False
        parsed_date_monthfirst = parse_datetime(date, dayfirst=False)

        # if date is parsed correctly with dayfirst=True, increment count_dayfirst
        if parsed_date_dayfirst:
            count_dayfirst += 1

        # if date is parsed correctly with dayfirst=False, increment count_monthfirst
        if parsed_date_monthfirst:
            count_monthfirst += 1

    # if count_dayfirst is less than count_monthfirst, return False
    if count_dayfirst < count_monthfirst:
        return False

    return True


# test the function
# print(check_dayfirst(["11/05/22, 5:59 pm", "12/05/22, 5:30 am", "13/05/22, 5:59 pm"]))
# print(check_dayfirst(["05/11/22, 5:59 pm", "05/12/22, 5:30 am", "05/13/22, 5:59 pm"]))


def convert_long_to_date(long_date: int) -> datetime.date:
    dt = datetime.datetime.fromtimestamp(long_date / 1000)
    date = datetime.date(dt.year, dt.month, dt.day)
    return date

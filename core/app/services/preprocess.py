import numpy as np
import emoji


def time_extractor(chat: str, phone: str) -> str:
    y = 0
    if phone == "IOS":
        y = chat.find("] ")
        return chat[1:y]
    else:
        y = chat.find(" - ")
        return chat[:y]


def chat_extractor(chat: str, phone: str) -> str:
    y = 0
    if phone == "IOS":
        y = chat.find("] ") + 2
    else:
        y = chat.find(" - ") + 3
    return chat[y:]


def person_extractor(chat: str) -> str:
    y = chat.find(": ")
    if y != -1:
        return chat[:y]
    else:
        return np.nan


def message_extractor(chat: str) -> str:
    y = chat.find(": ") + 2
    s = ""
    if (y - 2) != -1:
        s = chat[y:]
    else:
        s = chat
    if (
        s == "<Media omitted>"
        or s == "This message was deleted"
        or s == "You deleted this message"
        or s.find("image omitted") != -1
        or s.find("video omitted") != -1
        or s.find("audio omitted") != -1
        or s.find("file omitted") != -1
        or s.find("sticker omitted") != -1
        or s.find("gif omitted") != -1
        or s.find("voice omitted") != -1
        or s.find("contact omitted") != -1
        or s.find("location omitted") != -1
        or s.find("document omitted") != -1
        or s.find("<MEDIA>") != -1
    ):
        return np.nan
    else:
        return s


def extract_emojis(s: str) -> str:
    return "".join(c for c in s if c in emoji.EMOJI_DATA)


def parse_message(s: str, phone: str) -> list:
    time = time_extractor(s, phone)
    person_chat = chat_extractor(s, phone)
    person = person_extractor(person_chat)
    message = message_extractor(person_chat)
    return [time.lower(), person, message]

def get_phone_type(chat: str):
    if chat.find(" - ") == -1:
        return "IOS"
    return "ANDROID"

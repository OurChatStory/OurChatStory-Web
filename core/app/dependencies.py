from fastapi import File, HTTPException, UploadFile
import app.utils.constants as c
from app.utils.extractor import decode_csv, extract_zip


async def get_chats(file: UploadFile = File(...)):
    file_type = file.filename.split(".")[-1].lower()
    if file_type not in c.ALLOWED_FILE_TYPES:
        raise HTTPException(status_code=400, detail="File type not supported")
    if file_type == "zip":
        return await extract_zip(file)
    else:
        return await decode_csv(file)

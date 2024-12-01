from fastapi import File, UploadFile
from zipfile import ZipFile
import io


async def extract_zip(file: UploadFile = File(...)):
    contents = await file.read()
    zip_file = ZipFile(io.BytesIO(contents))
    return zip_file.read("_chat.txt").decode("utf-8")


async def decode_csv(file: UploadFile = File(...)):
    contents = await file.read()
    return contents.decode("utf-8")

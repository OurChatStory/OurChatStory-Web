from fastapi import File, UploadFile
from zipfile import ZipFile
import io


async def extract_zip(file: UploadFile = File(...)):
    contents = await file.read()
    zip_file = ZipFile(io.BytesIO(contents))
    for file_name in zip_file.namelist():
        if file_name.endswith(".txt"):
            return zip_file.read(file_name).decode("utf-8")
    return None


async def decode_csv(file: UploadFile = File(...)):
    contents = await file.read()
    return contents.decode("utf-8")

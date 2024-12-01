from fastapi import APIRouter, Depends, HTTPException, UploadFile

from app.dependencies import get_chats
from app.services.stats import get_wrap
from app.utils.constants import MODE

router = APIRouter()


@router.post("/wrap", tags=["wrap"])
async def wrap(chats: str = Depends(get_chats)):
    try:
        return get_wrap(chats)
    except Exception as e:
        if MODE == "dev":
            raise e
        else:
            print(e)
            raise HTTPException(status_code=400, detail="Invalid chats")

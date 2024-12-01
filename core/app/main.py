from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import wrap
import uvicorn

app = FastAPI(title="OurChatStory API", version="3.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://ourchatstory.co"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(wrap.router)


@app.get("/")
async def root() -> dict:
    return {"message": "OurChatStory API is running!"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)

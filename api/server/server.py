from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from server.routes.data_routes import data_router
import pandas as pd

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(data_router, tags=["Data"], prefix="/api")


@app.get("/api", tags=["Root"], response_model=dict,response_description="Welcome to this supermarket analytics")
async def root():
    return {"message": "Hello World"}

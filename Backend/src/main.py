# main.py

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import psycopg2
import os
from dotenv import load_dotenv
load_dotenv()
app = FastAPI()

# ---- CORS ----
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # later replace with your frontend domain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ---- Model ----
class EarlyAccess(BaseModel):
    name: str
    email: EmailStr
    mobile: str
    purpose: str

# ---- DB Helper ----
def get_conn():
    return psycopg2.connect(os.getenv("NEON_DATABASE_URL"))

# ---- Routes ----
@app.get("/")
def root():
    return {"status": "ok"}

@app.post("/early-access")
def early_access(data: EarlyAccess):
    try:
        conn = get_conn()
        cur = conn.cursor()

        cur.execute(
            """
            INSERT INTO early_access_users (name, email, mobile, purpose)
            VALUES (%s, %s, %s, %s)
            """,
            (data.name, data.email, data.mobile, data.purpose),
        )

        conn.commit()
        cur.close()
        conn.close()

        return {"success": True}

    except Exception as e:
        print("DB Error:", e)
        raise HTTPException(status_code=500, detail="Internal server error")


@app.get("/early-access-users")
def get_early_access_users():
    try:
        conn = get_conn()
        cur = conn.cursor()

        cur.execute("SELECT * FROM early_access_users")
        users = cur.fetchall()

        cur.close()
        conn.close()

        return users
    except Exception as e:
        print("DB Error:", e)
        raise HTTPException(status_code=500, detail="Internal server error")
from fastapi import FastAPI, Request, Depends, HTTPException, UploadFile, File, Form
from fastapi.responses import FileResponse
from pydantic import BaseModel, conlist, Field, validator
from fastapi.middleware.cors import CORSMiddleware
import pymongo
from bson import ObjectId 
from starlette.datastructures import FormData
import os, math



app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class LoginForm(BaseModel):
    phone: str
    password: str

class Form(BaseModel):
    phone: str
    token: str

class GetProblemForm(BaseModel):
    phone: str
    token: str
    problem_id: str

class GetSubmissionForm(BaseModel):
    phone: str
    token: str
    submission_id: str

class SubmitProblemForm(BaseModel):
    phone: str
    token: str
    problem:str
    language:str
    code:str

@app.post("/api/login/")
async def login(login_form: LoginForm):
    res = dict()
    phone = login_form.phone
    password = login_form.password

    user = None#db.users.find_one({"phone": phone})
    if user is None:
        res["phone"] = "Phone number does not match"
    elif user['password'] == password:
        res["Success"] = True
        login_entry = dict()
        login_entry["phone"] = phone
        login_entry["create_time"] = 0
        res["phone"] = phone
        res["token"] = "UIHY*Y(U)U(HH())"
    else:
        res["password"] = "Password does not match"
    return res


@app.post("/api/get_problems/")
async def login(form: Form):
    res = dict()
    problems = [{"id": "A", "title": "Problem A", "submissions": 22, "accepted": 18},{"id": "B", "title": "Problem B", "submissions": 22, "accepted": 18},{"id": "C", "title": "Problem C", "submissions": 22, "accepted": 18}]
    res["problems"] = problems
    res["Success"] = True
    return res


@app.post("/api/get_problem/")
async def login(form: GetProblemForm):
    res = dict()
    res["problem"] = "<h1>problems</h1>rtgrtgrt<i>gtgrt</i>"
    res["Success"] = True
    return res

@app.post("/api/submit_problem/")
async def login(form: SubmitProblemForm):
    res = dict()
    res["submission_id"] = "Aw*3Gf3279GGYUG@#8723"
    res["Success"] = True
    return res

@app.post("/api/get_submission/")
async def login(form: GetSubmissionForm):
    res = dict()
    res["verdict"] = "Time Limit Exceeded"
    res["Success"] = True
    return res

@app.post("/api/get_submissions/")
async def get_submissions(form: Form):
    res = dict()
    res["submissions"] = [{"problem_id": "A", "verdict": "Time Limit Exceeded", 'time': "3:59 PM"},{"problem_id": "B", "verdict": "Wrong Answer", 'time': "3:54 PM"}]
    res["Success"] = True
    return res

@app.post("/api/get_ranklist/")
async def get_submissions():
    res = dict()
    res["ranklist"] = [["Team", "A", "B", "C", "D", "E", "F"],["DU_ABC", "✔(23)", "✔(44)", "✔(5)", "✔(23)", "✔(44)", "✔(5)"],["DU_CCD", "✘(23)", "✘(44)", "✘(5)", "✘(23)", "✘(44)", "✘(5)"],["DU_WER", "✘(23)", "✘(44)", "✔(5)", "✘(23)", "✘(44)", "✔(5)"]]
    res["Success"] = True
    return res
import React from 'react';
import ReactDOM from "react-dom/client";
import Home from './HomePage/Home'
import Register from "./Register/Register";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Problems from "./Problems/Problems";
import Problem from './Problem/Problem';
import Submit from './Submit/Submit';
import Submission from './Submission/Submission';
import Ranklist from './Ranklist/Ranklist'
import Submissions from './Submissions/Submissions';
import {BrowserRouter, Route, Routes} from "react-router-dom";


const root = ReactDOM.createRoot(
    document.getElementById("root")
);
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="/dashboard" element={<Dashboard />} />

            <Route path="/problems" element={<Problems />} />

            <Route path="/problem/:id" element={<Problem />} />

            <Route path="/submission/:id" element={<Submission />} />

            <Route path="/submissions/" element={<Submissions />} />

            <Route path="/submit" element={<Submit />} />

            <Route path="/ranklist" element={<Ranklist />} />
            

        </Routes>
    </BrowserRouter>
);
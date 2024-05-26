import React from "react"; // Assuming Header is a React component
import Header from "./Header"; // Adjust the path according to the actual location of Header component
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    async function signUp() {
        let item = { name, password, email };
        let result = await fetch("http://localhost:8000/api/register", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(item)
        });
        result = await result.json();
        console.warn("result", result);
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate('/home');
    }
    return (
        <>
        <Header/>
        <div className="col-sm-6 offset-sm-3">

            <h1>Sign Up</h1>
            <input type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} className="form-control" />
            <br />
            <input type="text" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} className="form-control" />
            <br />
            <input type="text" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} className="form-control" />
            <br />
            <button onClick={signUp} className="btn btn-primary">Sign Up</button>
        </div>

    </>
    );
}


export default Register;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { username, password });

            localStorage.setItem("token", data.token);
            localStorage.setItem("role", data.role);

            if (data.role === "HR") {
                navigate("/hr-dashboard");
            } else {
                navigate("/");
            }
        } catch (error) {
            setError("Invalid username or password");
        }
    };

    return (
        <div className="page-container">
            <h2>HR Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;

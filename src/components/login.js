import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from '../axios/auth-service';
// import TokenAuth from "../server/token-service";
const Login = ({login}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [navigate, setNavigate] = useState(false);
    const initilaState = {
        email,
        password
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        AuthService.login(initilaState).then(data => {
            login()
            console.log(data)
            setEmail('')
            setPassword('')
        }).catch(err => console.log(err))
        setNavigate(true)
    }
    if (navigate) {
        return <Navigate to="/" />
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit} className="form-group">
                <h1>Войти</h1>
                <div className="form-list">
                    <label htmlFor="">почта</label>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                        type="email"
                        placeholder="почта адрес"
                    />
                </div>
                <div className="form-list">
                    <label htmlFor="">пароль</label>
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        name="password"
                        type="password"
                        placeholder="пароль"
                    />
                </div>
                <button type="submit">Войти</button>
            </form>
        </div>
    )
}

export default Login;
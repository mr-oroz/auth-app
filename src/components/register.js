import React from "react";
import { useState } from "react";
import AuthService from "../axios/auth-service";

const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirsName] = useState('')
    const [lastName, setLastName] = useState('')
    const inintialState = {
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
    }
    
    const handleSubmit = e => {
        e.preventDefault()
        AuthService.signUp(inintialState).then(data => {
            console.log(data)
            setEmail('')
            setFirsName('')
            setLastName('')
            setPassword('')
        })
    }
    return (
        <div className="register">
            <form onSubmit={handleSubmit} className="form-group">
                <h1>Регистрация</h1>
                <div className="form-list">
                    <label htmlFor="">почта</label>
                    <input
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="почта адрес" />
                </div>
                <div className="form-list">
                    <label htmlFor="">пароль</label>
                    <input
                        name='password'
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="пароль" />
                </div>
                <div className="form-list">
                    <label htmlFor="">Имя</label>
                    <input
                        name='firstName'
                        onChange={e => setFirsName(e.target.value)}
                        type="text"
                        placeholder="Имя" />
                </div>
                <div className="form-list">
                    <label htmlFor="">Фамилия</label>
                    <input
                        name="lastName"
                        onChange={e => setLastName(e.target.value)}
                        type="text"
                        placeholder="Фамилия" />
                </div>
                <button type="submit">Регистрация</button>
            </form>
        </div>
    )
}

export default Register;
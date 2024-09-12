"use client"
import Link from "next/link";
import React, { useState } from 'react';


const Login = ()=>{
    const [email, setEmail] = useState("")
    const [password, setPass] = useState("")
    
    const handleEmailChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setEmail(e.target.value)
    }
    const handlePassChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setPass(e.target.value)
    }
    const submitForm = () =>{
        const data = {
            "email":email,
            "pass":password
        }
        // Fazer a requisição
    }
    return (
<div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Faça o login</h1>
    <form onSubmit={submitForm}>
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email:</label>
            <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                type="email" id="email" name="email" placeholder="Digite seu email" required 
                onChange={handleEmailChange}/>
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="pass">Senha:</label>
            <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                type="password" id="pass" name="pass" placeholder="Digite sua senha" required 
                onChange={handlePassChange}/>
        </div>

        <button
            className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transhtmlForm hover:-translate-y-1 shadow-lg hover:shadow-2xl"
            type="submit">Login</button>
    </form>
    <div className="flex justify-between mt-4">
        <Link className="text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out" href={"/register"}>Crie uma nova conta</Link>
        <Link className="text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out" href={"/redpass"}>Esqueceu a Senha</Link>
    </div>
</div>
    )
}

export default Login
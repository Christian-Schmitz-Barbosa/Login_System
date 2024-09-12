"use client"
import Link from "next/link";
import React, { useState } from 'react';

interface Person  {
    name: string,
    email: string,
    password: string,
    confPass: string

}
const Register = () =>{
    const [person, setPerson] = useState<Person>({name: '', email: '', password: '', confPass:''})
    const [message, setMessage] = useState("")
    const passValidator = () => {
        const regex = /^(?=.*\d).{8,}$/;
        if(!regex.test(person.password)){
            setMessage('Senha incorreta')
            return true
        }else if (person.password != person.confPass){
            setMessage('Conflito entre as senhas')
            return true
        }
        return false
      };
    const submitForm = (e: React.FormEvent) =>{
        e.preventDefault()
       
        if(passValidator()){
            return
        }
        setMessage("")
        // Fazer a requisição
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setPerson((prevPerson) => ({
          ...prevPerson,
          [name]: value,
        }));
        console.log(person)
      };

    return ( 
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Crie uma nova conta</h1>
        {message && (<p className="text-red-500" >{message}</p>)}

        <form onSubmit={submitForm}>
            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">Nome:</label>
                <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                    type="text" id="name" name="name" placeholder="Digite seu nome" required 
                    onChange={handleInputChange}/>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email:</label>
                <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                    type="email" id="email" name="email" placeholder="Digite seu email" required
                    onChange={handleInputChange} />
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="password">Senha:</label>
                <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                    type="password" id="password" name="password" placeholder="Digite sua senha" required 
                    onChange={handleInputChange}/>
                    <p className="text-gray-700 text-sm">A senha deve possuir pelo menos 8 caracteres e 1 número</p>

            </div>

            <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2" htmlFor="confPass">Confirme a senha:</label>
                <input
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                    type="password" id="confPass" name="confPass" placeholder="Confirme sua senha" required 
                    onChange={handleInputChange}/>
            </div>

            <button
                className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transhtmlForm hover:-translate-y-1 shadow-lg hover:shadow-2xl"
                type="submit">Registrar</button>
        </form>
        <div className="text-center mt-4">
            <Link className="text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out" href={"/login"}>Já possuo conta</Link>
        </div>
    </div>

    )
}

export default Register
import Link from "next/link";


const Register = () =>{
    return (
<div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
    <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Crie uma nova conta</h1>
    <form>
        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="nome">Nome:</label>
            <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                type="text" id="nome" name="nome" placeholder="Digite seu nome" required />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">Email:</label>
            <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                type="email" id="email" name="email" placeholder="Digite seu email" required />
        </div>

        <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="pass">Senha:</label>
            <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                type="password" id="pass" name="pass" placeholder="Digite sua senha" required />
                <p className="text-gray-700 text-sm">A senha deve possuir pelo menos 8 caracteres </p>

        </div>

        <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2" htmlFor="conf_pass">Confirme a senha:</label>
            <input
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                type="password" id="conf_pass" name="conf_pass" placeholder="Confirme sua senha" required />
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
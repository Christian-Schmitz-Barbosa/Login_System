import Link from "next/link";


const Redpass = () => {
    return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Alterar senha</h1>
        <div className="text-center mt-4">
            <Link className="text-gray-700 hover:text-blue-700 transition duration-300 ease-in-out" href={"/login"}>Voltar para login</Link>
        </div>
    </div>
    )
}

export default Redpass
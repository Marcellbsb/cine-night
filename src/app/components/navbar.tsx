import Link from "next/link";

export default function Navbar() {
    return (

        <nav className="flex justify-between bg-gradient-to-r from-indigo-500 from-10% via-purple-500 via-30% to-emerald-500 to-90%  w-full mx-auto p-4w-full max-w-9xl p-4">
            <div className="flex gap-3 items-center">
            <img className="rounded-lg h-20 w-30 md:h-25 margin-2 ml-12 md:w-35 lg:h-14 lg:w-14 " src={"https://dgdesign.ru/uploads/posts/2019-07/1564038697_dnmfwhsxh.png" } alt="img" />
                <Link href="/" >
                    <h1 className=" text-red-800 text-4xl ml-8 pt-2  font-bold">Cine Night</h1>
                </Link>
            </div>
            <div className="flex justify-between text-black font-bold space-x-28 pt-4 mr-8">
            <Link href="/" >
                <select className=" bg-transparent">
                    <option>Pesquisar</option>
                    <option>Séries</option>
                     <option>Filmes</option>
                </select>
            </Link>
            
            <Link href="/" >
                <select className=" bg-transparent">
                <option>Categorias</option>
                <option>Animação</option>
                <option>Aventura</option>
                <option>Ação</option>
                <option>Comédia</option>
                <option>Policial</option>
                <option>Drama</option>
                <option>Fantasia</option>
                <option>Faroeste</option>
                <option>Ficção</option>
                <option>Romance</option>
                <option>Terror</option>
                </select>
            </Link>
                            
            <Link href="/sobre" >Sobre</Link>            
            <Link href="/register" >Cadastre-se</Link>
            <Link href="/login" >Login</Link>
            </div>
        </nav>
    )
}
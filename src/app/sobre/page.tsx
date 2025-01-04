import { Footer } from "../components/footer";
import Link from "next/link";
import Social from "../components/sociais";

export default function Sobre() {
    return (
        <main className="flex min-h-screen flex-col  justify-between ">
            <nav className="flex justify-between bg-gradient-to-r from-emerald-500 from-10% via-purple-500 via-30% to-indigo-500 to-90% w-full max-w-9xl p-4">

            </nav>
            <div className="flex justify-center" >
            <img className="rounded-lg h-20 w-30 md:h-25 margin-2 ml-6 md:w-35 lg:h-12 lg:w-12 mt-14 animate-bounce " src={"https://github.com/Marcellbsb/EducaKidsapi/blob/main/log.png?raw=true" } alt="" />
                <Link href="/" >
                    <h1 className=" text-red-800 animate-bounce text-4xl font-bold ml-4 mr-6 mt-14">Senac Filmes</h1>
                </Link>
            </div>


            <div className="flex text-sm  px-14 text-green-200">
                <p className="flex text-center px-4 py-4  "> Somos o CINE NIGHT e proporcionamos um serviço Web personalizado, também disponível em Mobile, que o levará para um jornada épica pelo mundo do cinema e das séries. Acreditamos que a sétima arte tem o poder de transportar, emocionar e inspirar, e queremos tornar essa experiência acessível aos mais variados usuários, fazendo de simples instantes, momentos eternos. Junte-se a nós, desvende esse universo de entretenimento que lhe proporcionará uma experiência única, surreal e exclusiva no universo do cinema.
                </p>
            </div>
            <p className="flex justify-center  text-red-800 font-bold animate-pulse text-2xl">Cine Night: Sua dose diária de emoção !!!</p>
            <Social/>

            <Footer />            
        </main>
    )
}
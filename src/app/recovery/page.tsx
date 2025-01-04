import { Footer } from "../components/footer";
import Link from "next/link";

export default function Login() {
  return (
    <main className="flex min-h-screen flex-col  justify-between ">
      <nav className="flex justify-between bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% w-full mx-auto max-w-9xl p-4">

      </nav>
      <div className="flex justify-center mt-7" >
      <img className="rounded-lg h-20 w-30 md:h-25 margin-2 ml-4 md:w-35 lg:h-12 lg:w-12 mt-24  mr-4 " src={"https://github.com/Marcellbsb/EducaKidsapi/blob/main/log.png?raw=true" } alt="" />
        <Link href="/" >
          <h1 className=" text-red-800 text-4xl  font-bold mt-24 mr-6">Cine Night</h1>
        </Link>
      </div>
      <div className="w-full max-w-xs mx-auto">
        <div className="w-full max-w-xs">
          <form className="justify-center bg-white border-2  border-indigo-500   shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label className="flex justify-center text-gray-700 text-sm font-bold mb-2" >
                Email
              </label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Insira seu email cadastrado" />
            </div>


            <div className="flex  items-center justify-center mb-6">
              <button className="bg-indigo-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                Enviar
              </button>
            </div>

          </form>
          <div className="flex text-center text-green-200 text-xs mt-4 ">
            <p>As informações de redefinição da senha serão enviadas para o email cadastrado</p>
          </div>
        </div>

      </div>

      <Footer />
    </main>
  )
}
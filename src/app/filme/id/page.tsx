import { Footer } from "@/app/components/footer";
import Link from "next/link";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getDetails } from "@/app/actions/getDetails";

export default async function Detalhes({ params }: Params) {
    const item = await getDetails(params.id)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <nav className="flex justify-between bg-gradient-to-r from-emerald-500 from-10% via-sky-500 via-30% to-indigo-500 to-90% w-full mx-auto max-w-9xl p-4"></nav>
            <div className="flex justify-center" >
            <img className="rounded-lg h-20 w-30 md:h-25 margin-2 ml-6 md:w-35 lg:h-12 lg:w-12 mt-14 " src={"https://github.com/Marcellbsb/EducaKidsapi/blob/main/log.png?raw=true" } alt="" />
                <Link href="/" >
                    <h1 className=" text-red-800 text-4xl  font-bold ml-4 mr-6 mt-14">Cine Night</h1>
                </Link>
            </div>
            <nav className="flex justify-between bg-cover bg-[url('https://image.tmdb.org/t/p/original/5tnag3ReRd0qDRIOYVU1ZWTbU1o.jpg')] w-full max-w-9xl p-4">

                <div className="flex gap-2 items-center ">

                </div>
                <div className="flex p-8 gap-8  " >
                    <img className="w-60 rounded" src={"https://media.themoviedb.org/t/p/w500/" + item.poster_path} alt="cartaz do 
                    filme" />
                </div>
                <div className="flex flex-col gap-4 w- 3/5">
                    <h2 className=" flex text-lime-400 text-4xl font-bold">{item.title}</h2>
                    <p className="text-lime-400">{item.overview} </p>
                </div>
            </nav>


            <Footer />
        </main>

    )

}

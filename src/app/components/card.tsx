"use client"

import { Heart, Star } from "lucide-react"
import { useFavorito } from "../../hooks/useFavorito"
import { useEffect } from "react"

interface Item {
  id: number;
  poster_path: string;
  title: string;
  vote_average: number;
}
interface Filme extends Item {
}
interface Serie extends Item {
}
interface Animation{
}
interface CardProps<T extends Item> {
  item: T;
}
export function Card<T extends Item>({ item }: CardProps<T>) {
  const { carregarFavoritos, favorito, desfavoritar, favoritar } = useFavorito(item)
  useEffect(() => carregarFavoritos(), [])
  return (
    <div className="flex flex-col gap-2 items-center w-40 relative">
      {favorito ?
        <Heart onClick={desfavoritar} className="absolute text-red-800 right-1 top-1 cursor-pointer" fill="red" /> :
        <Heart onClick={favoritar} className="absolute text- text-red-800 right-0 top-0 cursor-pointer" />
      }
      <img className="rounded-lg " src={"https://image.tmdb.org/t/p/w500/" + item.poster_path} alt="Furiosa" />
      <span className="text-lg font-medium line-clamp-1">
        {item.title}
      </span>
      <div className="flex items-center gap-2">
        <Star className=" text-amber-400" />
        <span className=" opacity-90"> {item.vote_average.toFixed(1)} </span>
      </div>
      <a href={"/filme/" + item.id} className=" bg-blue-600 py-1 px-6 rounded">
        Detalhes
      </a>
    </div>
  )
}

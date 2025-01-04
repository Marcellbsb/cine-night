import { useState } from "react"
export function useFavorito(item) {
    const [favorito, setFavorito] = useState(false)

    function favoritar() {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        favoritos.push(item)
        localStorage.setItem("favoritos", JSON.stringify(favoritos))
        setFavorito(true)
    }
    function desfavoritar() {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        const favoritosAtualizado = favoritos.filter(f => f.id !== item.id)
        localStorage.setItem("favoritos", JSON.stringify(favoritosAtualizado))
        setFavorito(false)
    }
    function carregarFavoritos() {
        const favoritos = JSON.parse(localStorage.getItem("favoritos")) || []
        const favorito = favoritos.find(f => f.id === item.id)
        setFavorito(favorito)
    }
    return {
        favorito,
        favoritar,
        desfavoritar,
        carregarFavoritos
    }

}
"use server"

export async function getMovies() {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ODgwYzE1NGNhOGZmOGI4MjUzMzE0MmM5YjM1YWU5NiIsInN1YiI6IjY2NjAzMDVjYjIyYTA0MzQ0NjRmNjFjMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ocIk3vnGVJdRy_J7Dj_5jkwtLBWnBnBMukOP6YvLCPs'
    }
  };

  const resp = await fetch('https://api.themoviedb.org/3/trending/movie/week?language=pt-BR', options)

  if (resp.ok) {
    const json = await resp.json()
    return json.results
  }


}
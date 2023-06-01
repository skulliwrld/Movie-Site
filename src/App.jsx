import React, { useEffect, useState } from "react";
import './App.css'
import SearchIcon from'./search.svg'
import MovieCard from "./components/MovieCard";
//99b9ad89
const API_URL = "http://www.omdbapi.com?apikey=99b9ad89"

function App(){

  const [movie,setMovie] = useState([]);
  const [searchTerm,setSearchTerm] = useState("")

  //const Movie1 = {
    //"Title": "John Wick: Chapter 3 - Parabellum: HBO First Look",
    //"Year": "2019",
    //"imdbID": "tt10275370",
   // "Type": "movie",
    //"Poster": "https://m.media-amazon.com/images/M/MV5BYmI2NTIzNWYtYjVkNi00ZmRkLTlkYmUtZTU5YjVjNDMzMTdkXkEyXkFqcGdeQXVyNTE1NjY5Mg@@._V1_SX300.jpg"
  //}

  const searchMovies = async (title) =>{
    const response =await fetch(`${API_URL}&s=${title}`)
    const data = await response.json();

    setMovie(data.Search)
  }

  useEffect(()=>{
    searchMovies("superman")
  },[])

    return (
      <div className="App">
        <h1>Movie House</h1>


        <div key={movie.id} className="search">
          <input type="text" placeholder="search for your Movies" value={searchTerm}
          onChange={e =>setSearchTerm(e.target.value)}/>

          <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)} />
        </div>
        {movie?.length > 0 ? (
           <div className="container">
           {movie.map((item)=>
           <MovieCard Movie1={item}/>)}
         </div>
        ) :
        (
          <div className="empty">
            <h3>No Movies Found</h3>
          </div>
        )
      }

       



      </div>
    )
}

export default App;
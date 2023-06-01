import React from "react"

function MovieCard({Movie1}) {
  return (
    <div className="movie">
        <div>
            <p>{Movie1.Year}</p>
        </div>
        
        <div>
        <a href={Movie1.Poster} className="image.fit"><img src={Movie1.Poster !== 'N/A' ? Movie1.Poster:'https://via.placeholder.com/400'} alt={Movie1.Title}/></a>
        </div>


        <div>
            <span>{ Movie1.Type}</span>
            <h3>{ Movie1.Title}</h3>
            <p>{Movie1.Plot}</p>
        </div>

    </div>

  )
}

export default MovieCard

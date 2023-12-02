import React from 'react'

const Movies = (props) => {
  return (
    <div id='movies'>
        <img src={props.poster} alt=""></img>
      <p>{props.title}</p>
      <p>Year :{props.year}</p>
    </div>
  )
}

export default Movies;
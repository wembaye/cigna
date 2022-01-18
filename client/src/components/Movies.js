import React, {useEffect, useState} from 'react'
import styles from './Movies.module.css';
function Movies() {
  const [titles, setTitles] = useState([]);
  const [movie, setMovie] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:5000/api/graphql')
    .then(response => response.json())
    .then(data => setTitles(data));
  }, [])

  const showMovie = ()=>{
    fetch(`http://localhost:5000/api/titles`)
    .then(response => response.json())
    .then(data => setMovie(data));
  }
  console.log(movie, 'movie')
  return (
    <div >
    
      {titles ? titles.map((elem, index)=>(
          <div key={elem.title + index} className={styles.movies} onClick={()=>showMovie()}>
        <div >{elem.title} </div>
          <div className={styles.movieImage}>
        <img src={elem.thumbnail} alt={elem.title} width="200px" height="80px" />
        </div>
        </div>
        )):null}
    </div>
  );
}

export default Movies;

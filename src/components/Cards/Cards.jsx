import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Cards({ title, category }) {
  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWFkYTQwMWNkMTM1ZDMwM2YxZTJjNzU5MWI0NzJmMiIsIm5iZiI6MTcyNDI2MTAwMi4xNDcxOTEsInN1YiI6IjY2YzYxYzMyZjg4M2JhOTg5Y2QwN2MxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ChZ17GuaFovSg8IsYKZ4QBphwfufhwN47-du1V9T2TU'
    }
  };



  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      cardsRef.current.scrollLeft += e.deltaY;
    }

    axios.get(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => setApiData(response.data.results))
      .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [category]);

  return (
    <div className='mt-20'>
      <h2 className='mb-4 ml-12 text-bckgrn text-2xl font-head text-ffff '>{title ? title : "Popular on Netflix"}</h2>
      <div className='flex items-end overflow-x-scroll card-list ml-7' ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/user/${card.id}`} key={index} className='relative flex-shrink-0'>
              <img 
                className='ml-5 w-[290px] h-[160px] cursor-pointer rounded-md -mr-3 transition-transform duration-300 transform hover:scale-110' 
                src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} 
                alt={card.original_title}
              />
              <p className='absolute bottom-0 left-0 right-0 text-center text-white p-2'>
                {card.original_title}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Cards;

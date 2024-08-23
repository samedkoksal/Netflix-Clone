import React, { useEffect, useState } from 'react';
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function User() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
          headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWFkYTQwMWNkMTM1ZDMwM2YxZTJjNzU5MWI0NzJmMiIsIm5iZiI6MTcyNDI2MTAwMi4xNDcxOTEsInN1YiI6IjY2YzYxYzMyZjg4M2JhOTg5Y2QwN2MxOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ChZ17GuaFovSg8IsYKZ4QBphwfufhwN47-du1V9T2TU'
          }
        });
        setApiData(response.data.results[0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <IoArrowBackCircleOutline className='absolute top-5 left-5 w-12 h-12 cursor-pointer' onClick={() => { navigate(-2); }} />
      <iframe className='rounded-lg' width='90%' height='90%' src={`https://www.youtube.com/embed/${apiData.key}`} title='trailer' allowFullScreen frameBorder="0"></iframe>
      <div className='flex items-center justify-between w-[90%]'>
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default User;

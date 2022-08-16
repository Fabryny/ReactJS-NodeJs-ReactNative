import { useEffect, useState } from 'react';
import {Link, Navigate, useParams} from 'react-router-dom';
import axio from '../../../axios/axio';

import './Home.css'


function Home() {
const [filmes, setFilmes] = useState();
const [carregando, setCarregando] = useState(0)
  

async function getFilmes(){
  setCarregando(1);
  const filmes = await axio.get("movie/now_playing", {
      params: {
        api_key:"65c2d5035d07017f2ac2b44a123289ee",
        language: "pt-BR",
      }
    });

    setFilmes(filmes.data.results);
    console.log(filmes,'aa')
    setCarregando(0);
  }


useEffect(() => {

  getFilmes();

},[])

if(carregando){
  return(
    <div className="loading">
      <h2>Carregando filmes...</h2>
    </div>
  )
}
return(
    <div className="container">
      <div className="lista-filmes">
        {filmes?.map((filme) => {
          return(
            <article key={filme.id}>
              <strong>{filme.title}</strong>
              <img src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} alt={filme.title} />
              <Link to={`/filme/${filme.id}`}>Acessar</Link>
            </article>
          )
        })}
      </div>
    </div>
  )

}

export default Home
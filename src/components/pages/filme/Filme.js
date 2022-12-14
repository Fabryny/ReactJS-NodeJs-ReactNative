
import {Link, useNavigate, useParams} from 'react-router-dom';
import { useEffect, useState } from 'react';
import './filme.css';
import axio from '../../../axios/axio';
function Filme() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [filme, setFilme] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function carregarFilme(){
        await axio.get(`/movie/${id}`, {
            params:{
            api_key: "65c2d5035d07017f2ac2b44a123289ee",
            language: "pt-BR",
            }
        })
        .then((response)=>{
            setFilme(response.data);
            setLoading(false);
        })
        .catch(()=>{
            console.log("FILME NAO ENCONTRADO");
            navigate("/", { replace: true });
            return;
        })
        }

        carregarFilme();


        return () => {
        console.log("COMPONENTE FOI DESMONTADO")
        }
    }, [navigate, id])




    function salvarFilme(){
        const minhaLista = localStorage.getItem("@primeflix");
    
        let filmesSalvos = JSON.parse(minhaLista) || [];
    
        const hasFilme = filmesSalvos.some( (filmesSalvo) => filmesSalvo.id === filme.id)
    
        if(hasFilme){
          alert("Esse filme já está na sua lista!")
          return;
        }
    
        filmesSalvos.push(filme);
        localStorage.setItem("@primeflix", JSON.stringify(filmesSalvos));
        alert("Filme salvo com sucesso!")
    
      }

    if(loading){
        return(
          <div className="filme-info">
            <h1>Carregando detalhes...</h1>
          </div>
        )
      }
      
      return(
        <div className="filme-info">
          <h1>{filme.title}</h1>
          <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
    
          <h3>Sinopse</h3>
          <span>{filme.overview}</span>
          <strong>Avalição: {filme.vote_average} / 10</strong>
    
          <div className="area-buttons">
            <button onClick={salvarFilme}>Salvar</button>
            <button>
              <a target="blank" rel="external" href={`https://youtube.com/results?search_query=${filme.title} Trailer`}>
                Trailer
              </a>
            </button>
          </div>
    
        </div>
      )
}

export default Filme;
import { useEffect, useState } from 'react';
import './App.css';

const api = 'https://pokeapi.co/api/v2/pokemon?limit=10&offset=0';

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [score, setScore] = useState(0);

  const getData = async function () {
    const response = await fetch(api);
    const pokemonName = await response.json();

    pokemonName.results.map(async function (data) {
      const imgResponse = await fetch(data.url);
      const img = await imgResponse.json();
      const poke = { name: data.name, imgUrl: img.sprites.other["official-artwork"].front_default, visited: false };

      setPokemon((prevPokemon) => [...prevPokemon, poke]);
    });
  };

  const handleCardClick = (index) => {
    setPokemon((prevPokemon) =>
      prevPokemon.map((poke, i) =>{
        if(i==index){
          if(poke.visited==true) {
            setScore(0);
            return {...poke,visited: false}
          }else setScore(score+1);
          return {...poke,visited: true};
        }
        else
        return poke;
      })
    );

    setPokemon((prevPokemon) => shuffleArray([...prevPokemon]));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="heading">
        <h1>Amphibian Game</h1>
      <div className="score__board">
        <h2>Score : {score}</h2>
      </div>
        <div className="pokemon__box">
          {pokemon.map((poke, index) => (
            <div
              key={index}
              className={`card shadow p-3 mb-5 bg-body-tertiary rounded ${
                poke.visited ? 'visited' : ''
              }`}
              onClick={() => handleCardClick(index)}
            >
              <img src={poke.imgUrl} className="card-img-top" alt="..." />
              <div className="card-body">
                <h3 className="card-text">{poke.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

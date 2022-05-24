import PokeDetails from './PokeDetails'
//import Proptypes from 'prop-types';

export default function PokePages({pokemons}) {
    const pokerender = pokemons.map((pokemon,index) =>
      <PokeDetails
          key = {index}
          pokemon = {pokemon} 
      />
    )
    return (
        <div>
            {pokerender}
        </div>
    );
}


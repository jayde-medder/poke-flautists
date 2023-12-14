import PokemonDetails from './PokemonDetails.tsx'
import { Pokemon as PokemonType } from '../../models/pokemon.js' // Import the Pokemon type

type Props = {
  selectedPokemon: PokemonType | null // Specify the type for selectedPokemon
}

//Header has selected pokemon as a props to pass to it's PokemonDetails child component
function Header({ selectedPokemon }: Props) {
  return (
    <div className="header">
      <div className="headerContentContainer">
        <img
          id="logo"
          src="../server/public/images/Screenshot 2023-09-21 150953.png"
          alt="Poke-Flautists Logo"
        ></img>
        <PokemonDetails pokemon={selectedPokemon} />
      </div>
      <hr></hr>
    </div>
  )
}

export default Header

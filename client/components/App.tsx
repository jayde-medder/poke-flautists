import PokemonList from './PokemonList.tsx'
import Header from './Header.tsx'
import { useState } from 'react'
import { Pokemon as PokemonType } from '../../models/pokemon.ts'

function App() {
  //App contains reference to the state of the Pokemon being hovered over.
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonType | null>(
    null
  )

  //PokemonList component sets the state to the hovered on pokemon
  //Header recieves the pokemon and passes it to it's details component
  return (
    <>
      <Header selectedPokemon={selectedPokemon} />
      <PokemonList setSelectedPokemon={setSelectedPokemon} />
    </>
  )
}

export default App

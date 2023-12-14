import { useState, useEffect } from 'react'
import { Pokemon as PokemonType } from '../../models/pokemon.ts'
import PokemonByType from './PokemonByType.tsx'
import { getPokemonList } from '../apiClient/pokemon.js'

//Allows the component to update state in the parent 'App' component
type Props = {
  setSelectedPokemon: (pokemon: PokemonType | null) => void
}

//This function fetches and renders a list of pokemon images and maintains reference to the Pokemon being hovered over
export default function PokemonList({ setSelectedPokemon }: Props) {
  const [pokemonList, setPokemonList] = useState<PokemonType[] | null>(null) // there can be two types, Pokemon or null type
  const [selectedType, setSelectedType] = useState<string>('')
  const [loadingError, setLoadingError] = useState(
    undefined as string | undefined
  )

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const pokemonData = await getPokemonList()
        setPokemonList(pokemonData)
      } catch (err) {
        setLoadingError(String(err))
      }
    }

    fetchPokemon()
  }, [])

  const filteredPokemonList = pokemonList?.filter((pokemon) => {
    if (selectedType === '' || selectedType === 'all') {
      return true // Display all Pokemon if no type is selected
    } else {
      return pokemon?.types[0]?.type.name === selectedType
    }
  })

  //Updates the pokemon in props, making it visible to the parent 'App' component
  const handlePokemonMouseEnter = (pokemon: PokemonType) => {
    setSelectedPokemon(pokemon)
  }

  //Each Pokemon is rendered as an image
  //OnMouseEnter is called when an image is hovered over
  return (
    <>
      <PokemonByType onTypeSelect={setSelectedType} />
      <div className="pokemonContainer">
        {filteredPokemonList?.map((pokemon) => {
          return (
            <img
              className="pokemonSprite"
              key={pokemon.name}
              src={pokemon.sprites?.front_default}
              alt={pokemon.name}
              onMouseEnter={() => handlePokemonMouseEnter(pokemon)}
            ></img>
          )
        })}
      </div>
    </>
  )
}

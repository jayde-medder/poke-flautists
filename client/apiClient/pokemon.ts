import request from 'superagent'
import { Pokemon } from '../../models/pokemon.ts'

interface Results {
  name: string
  url: string
}

export async function getPokemonList(): Promise<Pokemon[]> {
  const response = await request.get(
    'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=494'
  )
  const results = response.body.results as Results[]

  const pokemonDetails: Pokemon[] = await Promise.all(
    results.map(async (pokemon) => {
      const detailsResponse = await request.get(pokemon.url)
      return detailsResponse.body
    })
  )
  return pokemonDetails
}

import { Pokemon as PokemonType } from '../../models/pokemon.ts'

interface Props {
  pokemon?: PokemonType | null
}

//Pokemon details recieves a Pokemon from Header as props to render the pokemons details
export default function PokemonDetails(props: Props) {
  function capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  return (
    <div className="pokemonDetailsBox">
      {props.pokemon ? (
        <div className="pokemonInfo">
          <p>Name: {capitalize(props.pokemon.name)}</p>
          <p>
            Type:{' '}
            {props.pokemon.types
              ? props.pokemon.types
                  .map((type) => capitalize(type.type.name))
                  .join(', ')
              : 'Unknown'}
          </p>
          <p>Height: {props.pokemon.height}</p>
          <p>Weight: {props.pokemon.weight}</p>
          <p>Base Experience: {props.pokemon.base_experience}</p>
        </div>
      ) : (
        <div className="pokemonInfo">No Pokemon selected</div>
      )}
    </div>
  )
}

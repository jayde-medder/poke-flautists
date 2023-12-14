import { useState } from 'react'

function PokemonByType({ onTypeSelect }) {
  const [down, setDown] = useState(false) // state to manage dropdown menu's visibility
  const [type, setType] = useState<string>('') // state that stores the selected type from menu

  const toggleDropdown = () => {
    // enables toggling on dropdown menu to show/hide list
    setDown(!down)
  }

  // handles event when a type is clicked/selected by the user
  const handleTypeClick = (type: string, href: string) => {
    setType(type) // the selected type is displayed inside dropbtn button component
    setDown(false) // closes the dropdown menu after selecting an item
    onTypeSelect(href)
  }

  return (
    <>
      <div className="typeDropdown">
        <button className="dropbtn" onClick={toggleDropdown}>
          {type || 'Display Type: All'}
        </button>
        {down && (
          <div className="type-content">
            <a
              href="all"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: All', 'all')
              }}
            >
              All
            </a>
            <a
              href="normal"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Normal', 'normal')
              }}
            >
              Normal
            </a>
            <a
              href="fire"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Fire', 'fire')
              }}
            >
              Fire
            </a>
            <a
              href="water"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Water', 'water')
              }}
            >
              Water
            </a>
            <a
              href="grass"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Grass', 'grass')
              }}
            >
              Grass
            </a>
            <a
              href="electric"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Electric', 'electric')
              }}
            >
              Electric
            </a>
            <a
              href="rock"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Rock', 'rock')
              }}
            >
              Rock
            </a>
            <a
              href="ground"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Ground', 'ground')
              }}
            >
              Ground
            </a>
            <a
              href="psyhic"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Psyhic', 'psychic')
              }}
            >
              Psyhic
            </a>
            <a
              href="fighting"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Fighting', 'fighting')
              }}
            >
              Fighting
            </a>
            <a
              href="flying"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Flying', 'flying')
              }}
            >
              Flying
            </a>
            <a
              href="poison"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Poison', 'poison')
              }}
            >
              Poison
            </a>
            <a
              href="ghost"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Ghost', 'ghost')
              }}
            >
              Ghost
            </a>
            <a
              href="bug"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Bug', 'bug')
              }}
            >
              Bug
            </a>
            <a
              href="ice"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Ice', 'ice')
              }}
            >
              Ice
            </a>
            <a
              href="dark"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Dark', 'dark')
              }}
            >
              Dark
            </a>
            <a
              href="steel"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Steel', 'steel')
              }}
            >
              Steel
            </a>
            <a
              href="dragon"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Dragon', 'dragon')
              }}
            >
              Dragon
            </a>
            <a
              href="fairy"
              onClick={(e) => {
                e.preventDefault()
                handleTypeClick('Display Type: Fairy', 'fairy')
              }}
            >
              Fairy
            </a>
          </div>
        )}
      </div>
    </>
  )
}

export default PokemonByType

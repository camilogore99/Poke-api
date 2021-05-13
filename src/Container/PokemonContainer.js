import React, { useEffect, useState } from 'react'
import requestPoke from '../requesPoke'
import PokemonItem from './PokemonItem'

const PokemonContainer = ( { url } ) => {
   console.log(url);

   const [pokemonName, setPokemonName] = useState('')
   const [pokemomType, setPokemomType] = useState('')
   const [pokemonUrl,  setPokemonUrl] = useState('')

   useEffect(() => {
      requestPoke(url)
      .then( ( data ) => {
         setPokemonName(data.name)
         setPokemomType( data.types[1].type.name )
         console.log(data.types[0].type);
         setPokemonUrl(data.sprites.front_default)
      } )
   }, [url])

   return (
      <>
         <PokemonItem 
         name={pokemonName}
         type={pokemomType}
         url={pokemonUrl}
          />
      </>
   )
}

export default PokemonContainer

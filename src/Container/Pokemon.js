import React, { useState ,useEffect } from 'react'
import request from '../request'
import PokemonContainer from './PokemonContainer';


import Search from './Search'


const Pokemon = () => {
   const [valueSelect, setValueSelect] = useState(null);
   const [dataApi, setDataApi] = useState([])
   const [numPokes, setNumPokes] = useState(0)

   useEffect(() => {
      request(valueSelect)
           .then((data) => {
              console.log(data);
              setDataApi( data.pokemon.slice(0, numPokes) ) 
         })
   }, [valueSelect, numPokes])
   
   const list = dataApi.map( ( value ) => {
      return <PokemonContainer url={value.pokemon.url} key={value.pokemon.name} />
   } )

   const handleSelect = ( event ) => {
      setValueSelect( event )
   }

   return (
      <div className="container">
         <div className="row" >
            <div>
               <h1 className="title" >poke Api</h1>
            </div>
         </div>
         <div className="title">
            <div className="serach-botton" >
               <Search handleSelect={handleSelect} setNumPokes={setNumPokes}  />
            </div>
         </div>
            <div>
               <div className="row mt-5" >
                  {list}
               </div>
            </div>
      </div>
   )
}

export default Pokemon

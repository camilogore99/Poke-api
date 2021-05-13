import React from 'react'

const PokemonItem = ( { name, type, url } ) => {
   
   return (
      <div className="card-container mt-3 col-12 col-sm-6 col-md-6 col-lg-4">
         <div className="card" Style="width: 16rem; max-height:21rem;">
            <img src={url} Style="width: 14rem; max-height:12rem;" className="card-img-top" alt="..." />
            <div className="card-body">
               <h6>
               Name : {name}
               </h6>
               <h6>
               type : {type}
               </h6>
            </div>
         </div>
      </div>
   )
}

export default PokemonItem

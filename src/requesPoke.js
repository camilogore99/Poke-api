

const requestPoke = ( url ) => {
   const res = fetch( url )
   return res.then( ( res ) => res.json() )
}

export default requestPoke;
const request = ( type ) => {

   const url = `https://pokeapi.co/api/v2/type/${type}`
   const res = fetch(url)
   
   return res.then((res2) => res2.json())
}

export default request;
import React, { useState } from 'react'

const Search = ( {handleSelect, setNumPokes} ) => {

   const [valueSelect, setValueSelect] = useState(0)
   const [valueNum, setValueNum] = useState(0)

   return (
      <div className="card-container">
         <select onChange={(e) => {
            
            setValueSelect(e.target.selectedIndex)
         }} className="form-select" aria-label="Default select example">
            <option value="0">Select type</option>
            <option value="1">Normal</option>
            <option value="2">Fighting</option>
            <option value="3">Flying</option>
            <option value="4">Poison</option>
            <option value="5">Ground</option>
            <option value="6">rock</option>
            <option value="7">bug</option>
            <option value="8">ghost</option>
            <option value="9">steel</option>
            <option value="10">fire</option>
            <option value="11">water</option>
            <option value="12">grass</option>
            <option value="13">electric</option>
            <option value="14">psychic</option>
            <option value="15">ice</option>
            <option value="16">dragon</option>
            <option value="17">dark</option>
            <option value="18">fairy</option>
         </select>
         <input type="number" value={valueNum} onChange={(e) => setValueNum(e.target.value)} />
         <button onClick={() => {
            handleSelect(valueSelect)
            setNumPokes(valueNum)
         }}
         className="btn btn-primary">Search </button>
      </div>
   )
}

export default Search

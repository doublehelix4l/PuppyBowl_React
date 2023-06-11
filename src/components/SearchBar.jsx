import React, {useState} from 'react';
import AllPlayers from './AllPlayers/AllPlayers';
 const cohortName = "2304-FTB-ET-WEB-FT";
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

function SearchBar({puppies, setAllPuppies}) {

  let [searchQuery, setSearchQuery] = useState("");
  let filteredPuppies = players.filter((singlePuppy) => {
    let lowercasedName = singlePuppy.name.toLowerCase(); 
    let lowercasedQuery = searchQuery.toLowerCase(); 

    if (lowercasedName.includes(lowercasedQuery)) {

      return singlePuppy

    }
  })

  return (
    <div>
      <form>
        <label htmlFor="search-query">Search Puppy Name Here: </label>
        <input 
          name="search-query" 
          type="text"
          placeholder="type here"
          value={searchQuery}
          onChange={(handleChange) => {
          ///  console.log(bananas.target.value)
            setSearchQuery(handleChange.target.value)
          }}
        ></input>
      </form>

      {
        filteredPuppies.length ? filteredPuppies.map((singlePuppy, idx) => {
          return (
            <div key={idx}>
              <h2>Name: {singlePuppy.name}</h2>
            </div>
          )
        }) : <p>Loading...</p>
      }
    </div>
  )
}

export default SearchBar
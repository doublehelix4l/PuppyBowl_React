import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import SinglePlayer from "../SinglePlayer/SinglePlayer";



export default function AllPlayers() {
    const cohortName = "2304-FTB-ET-WEB-FT";
    const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;
    const [players, setPlayers] = useState([])
    const [Puppy, setPuppy] = useState([])
    let [searchQuery, setSearchQuery] = useState("");
    let filteredPuppies = players.filter((singlePuppy) => {
        let lowercasedName = singlePuppy.name.toLowerCase(); 
        let lowercasedQuery = searchQuery.toLowerCase(); 
    
        if (lowercasedName.includes(lowercasedQuery)) {
    
          return singlePuppy
    
        }
      })
    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                const response = await fetch(`${APIURL}/players`) //// need api url here
                const translatedData = await response.json();
                setPlayers(translatedData.data.players) /// .posts may need changed depending on api
                //  console.log(translatedData)
                //console.log(allPosts)
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllPlayers();
    }, [])
    return (
        
        <div>
            <form>
        <label htmlFor="search-query">Search: </label>
        <input 
          name="search-query" 
          type="text"
          placeholder="Puppy Name Here"
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
              <h2>{singlePuppy.name}</h2>
              <img src={singlePuppy.imageUrl}></img>
              <Link to={`/SinglePlayer/${singlePuppy.id}`}>
                                   <button >Click Here for {singlePuppy.name}'s Details</button>
                        </Link>
            </div>
          )
        }) : <p>Loading...</p>
      }
            { 
                // players.map((player) => {
                //     return (
                //         <div key={player.id}>
                //             <div className="Puppies">
                //                 <h3>{player.name}</h3>
                //                 <img src={player.imageUrl}></img>
                //                 <Link to={`/SinglePlayer/${player.id}`}>
                //                     <button >Click Here for {player.name}'s Details</button>
                //                 </Link>
                //                 {/* <button onClick={() => setPlayers }>
                //                 </button> */}
                //             </div>
                //         </div>
                //     )
                // })
            }
        </div>
    )
}


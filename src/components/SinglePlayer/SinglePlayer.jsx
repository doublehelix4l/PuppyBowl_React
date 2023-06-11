import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import AllPlayers from "../AllPlayers/AllPlayers";

const cohortName = "2304-FTB-ET-WEB-FT";
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;


const SinglePlayer = ({ puppy }) => {
    const [player, setPlayer] = useState(null)
    const { id } = useParams()
    // const {breed} = useParams()

    useEffect(() => {
        async function fetchAllPlayers() {
            try {
                const response = await fetch(`${APIURL}/players/${id}`) //// need api url here
                const translatedData = await response.json();
                setPlayer(translatedData.data.player) /// .posts may need changed depending on api
                //  console.log(translatedData)
                console.log(player)
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllPlayers();
    }, [])


    console.log(id)

    return (
        <>
            {

                player && player.name ?

                    <div className="Single-Player">
                        <h2>{player.name}
                        </h2>
                        <h3>ID: {player.id}</h3>
                        <h3>Breed: {player.breed}</h3>
                        <img src={player.imageUrl}></img>
                    </div> : null
            }
        </>
    )
}
export default SinglePlayer
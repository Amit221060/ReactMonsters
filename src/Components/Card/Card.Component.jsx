import React from 'react'
import './Card.Style.css'
function Card(props) {
    return (
        <div className="card-container">
        <img src={`https://robohash.org/${props.monsters.id}?set=set2&size=180x180`} alt="Monsters"/>
        <h1> {props.monsters.name}</h1>  
        <h3>{props.monsters.email}</h3> 
        </div>
    )
}

export default Card;


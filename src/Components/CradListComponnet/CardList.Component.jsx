import React from "react";
import './Cardlist.Style.css'
import Card from '../Card/Card.Component'
function CardList(props){
   
        return (
            <div className="card-list">
                
            {props.monsters.map(data => (
            <Card key={data} monsters={data}/>
            ))}
            </div>
        );
    }

export default CardList;
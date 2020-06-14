import React from 'react'
import './Search.Style.css'
export default function Search(props) {
    return (
        <div className="search">
             <input type='search' placeholder = {props.placeholder} onChange={props.onChange}></input>
        </div>
    )
}

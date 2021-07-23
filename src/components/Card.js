import React from 'react'
import "./Card.css"

export default function Card(props) {
    return (
        <div className="card">
            <div className="photo" style={{backgroundImage: `url(${props.img})`}}>
                
            </div>
            <h1> {props.title} </h1>
            <p>{props.text}</p>
        </div>
    )
}

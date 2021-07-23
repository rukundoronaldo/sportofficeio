import React from 'react'
import "./Numbers.css"

export default function Numbers(props) {
    return (
        <div className="number">
            <h1>{props.title}</h1>
            <h3>{props.people}</h3>
        </div>
    )
}

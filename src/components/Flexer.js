import React from 'react'
import './Flexer.css'

export default function Flexer(props) {
    return (
        <div className="section">
            {props.children}
        </div>
    )
}

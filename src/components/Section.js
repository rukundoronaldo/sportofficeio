import React from 'react'

export default function Section(props) {
    return (
        <div style={{backgroundColor: props.back}}>
            {props.children}
        </div>
    )
}

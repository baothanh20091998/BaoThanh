import React from 'react'

export default function ChildFunction(props) {
    return (
        <div>
            <h1>ChildFunction</h1>
            <p>{props.ten}</p>
            <p>{props.noi}</p>
            <p>{props.children}</p>
        </div>
    )
}

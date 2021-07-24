import React from 'react'
import './styles.css'

const Button = (props) => {
    return (
        <div>
            <button
                className={props.className} 
                type={props.type || "button"}
                onClick={props.onClick}>
                {props.name}
            </button>
        </div>
    )
}

export default Button 

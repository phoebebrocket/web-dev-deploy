import React from 'react'
import Button from '../Button'
import {Link } from "react-router-dom";

import './styles.css';

const ImageBlockSwitch = (props) => {
    return (
        <div className="block">
            <div className="text">
                <h2>{props.title}</h2>
                <p>{props.para1}</p>
                <p>{props.para2}</p>
                <p>{props.para3}</p>
                <p>{props.para4}</p>
                <p>{props.para5}</p>
                <p>{props.para6}</p>
                <Link to={props.path}>
                    <Button name={props.name}/>
                </Link>
            </div>
            <div className="image">
                <img className="block-image" src={props.img} alt={props.alt}/>
            </div>
            
        </div>
        
    )
}

export default ImageBlockSwitch

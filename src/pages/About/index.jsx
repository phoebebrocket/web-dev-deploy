import React from 'react'
import ImageBlock from '../../components/ImageBlock'
import bigcookie from '../../assets/bigcookie.png'

import './styles.css'



function About() {
    return (
        <main className="about-us">
            <ImageBlock 
                
                img={bigcookie}
                title="About us"
                para1="Who doesn’t love cookies? Even better, who doesn’t love freshly baked cookies delivered weekly to your doorstep? That’s why I thought, and so cookie club was born."
                para2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit senectus tellus vel scelerisque ligula purus. Quis convallis malesuada lorem morbi ligula etiam tellus."
                para3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit senectus tellus vel scelerisque ligula purus. Quis convallis malesuada lorem morbi ligula etiam tellus."
                name="Let's get cookies"
                path='../Shop'
            />
        </main>
    )
}

export default About

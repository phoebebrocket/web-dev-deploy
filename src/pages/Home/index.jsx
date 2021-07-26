import React from 'react'
import { ReactComponent as BlueLogo } from '../../assets/blue_logo.svg';
import ImageBlock from '../../components/ImageBlock'
import Button from '../../components/Button'
import ImageBlockSwitch from '../../components/ImageBlockSwitch'
import homecookies from '../../assets/homecookies.png'
import cookiebox from '../../assets/cookiebox.jpg'
import cookiepile from '../../assets/cookiepile.png'

import './styles.css';

const Home = () => {
    return (
        <main className="home-page">
            <div className="landing">
                <BlueLogo
                    className="blue-logo"
                    alt="cookie club logo in navy blue"    
                />
                <a href="#linktobox">
                <Button
                    name="Cookie time"
                />
                </a>
            </div>
            <a id="linktobox"></a>
            <div className="block-one">
                
                <ImageBlock 
                    title="Welcome to the club!"
                    para1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nunc, at sed nibh semper sit adipiscing vivamus sed. Vel tellus egestas massa, volutpat nibh metus eget in. Donec tempor urna quis sit id malesuada nisi amet volutpat. Egestas enim, ac fringilla urna, etiam sed nulla."
                    para2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nunc, at sed nibh semper sit adipiscing vivamus sed. Vel tellus egestas massa, volutpat nibh metus eget in. Donec tempor urna quis sit id malesuada nisi amet volutpat. Egestas enim, ac fringilla urna, etiam sed nulla."
                    name="Join the club!"
                    img={homecookies}
                    path='../../Shop'
                    alt="cookies"
               />
               
            </div>

            <div className="block-two">
                <ImageBlockSwitch
                    title="What do I get?"
                    para1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nunc, at sed nibh semper sit adipiscing vivamus sed. Vel tellus egestas massa, volutpat nibh metus eget in. Donec tempor urna quis sit id malesuada nisi amet volutpat. Egestas enim, ac fringilla urna, etiam sed nulla."
                    para2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nunc, at sed nibh semper sit adipiscing vivamus sed. Vel tellus egestas massa, volutpat nibh metus eget in. Donec tempor urna quis sit id malesuada nisi amet volutpat. Egestas enim, ac fringilla urna, etiam sed nulla."
                    para3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nunc, at sed nibh semper sit adipiscing vivamus sed. Vel tellus egestas massa, volutpat nibh metus eget in. Donec tempor urna quis sit id malesuada nisi amet volutpat. Egestas enim, ac fringilla urna, etiam sed nulla."
                    name="Let me suggest!"
                    img={cookiebox}
                    path='../../Flavours'
                    alt="cookies"
               />
            </div>

            <div className="block-three">
                <ImageBlock 
                    title="Get me some cookies"
                    para1="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nunc, at sed nibh semper sit adipiscing vivamus sed. Vel tellus egestas massa, volutpat nibh metus eget in. Donec tempor urna quis sit id malesuada nisi amet volutpat. Egestas enim, ac fringilla urna, etiam sed nulla."
                    para2="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nunc, at sed nibh semper sit adipiscing vivamus sed. Vel tellus egestas massa, volutpat nibh metus eget in. Donec tempor urna quis sit id malesuada nisi amet volutpat. Egestas enim, ac fringilla urna, etiam sed nulla."
                    para3="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat nunc, at sed nibh semper sit adipiscing vivamus sed. Vel tellus egestas massa, volutpat nibh metus eget in. Donec tempor urna quis sit id malesuada nisi amet volutpat. Egestas enim, ac fringilla urna, etiam sed nulla."
                    name="About the club"
                    img={cookiepile}
                    path='../../About'
                    alt="cookies"
               />
            </div>

        </main>
    )
}

export default Home

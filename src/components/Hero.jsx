import React from 'react'
import Nav from './Nav'
import { FaArrowRight } from "react-icons/fa6";
import Footer from './Footer';
import Contact from './Contact';

const Hero = () => {
  return (
    <div>
    <Nav/>
    <div  style={{
        display: 'flex',
        justifyContent:'center',
        alignItems: 'center'
    }}>
        <img style={
            {
                position: 'absolute',
                top: '0%',
                left:'0%',
                zIndex: '-1',
                width: '100%',
                height: '100%',  
            }}
        src='./images/hero.jpg' alt='hero'>
        </img>
        <div
            style={
                {   
                    width: '100%',
                    height: '100vh',
                    backgroundColor: 'rgb(10, 43, 85)',
                    position: 'absolute',
                    zIndex: '-1',
                    opacity: '85%',       
                    top: '0%',
                }
               
            }
                >
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '87vh'
        }}>
            <h2 style={{
                color:'white',
                margin: 0,
                fontSize: 62,
                textAlign: 'center'
            }} >Beautiful analytics to grow smarter</h2>
            <p style={{
                textAlign: 'center',
                color:'white',
                fontSize: 24,

            }}>Powerful, self-serve product and growth analytics to help you convert, engage, <br/> and retain more users. Trusted by over 4,000 Stratups</p>
            <button style={{
                backgroundColor: 'transparent',
                borderColor: 'yellow',
                padding: '16px 32px',
                borderRadius: 6,
                marginTop: 20,
                color: 'white',
                fontSize: 20,
                cursor: 'pointer'
            }}>Why Catalog? <FaArrowRight/></button>
            </div>
    </div>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default Hero
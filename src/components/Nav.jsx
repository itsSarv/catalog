import React from 'react'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
    <div>
    <nav style={{
        display: 'flex',
        justifyContent:'space-between',
        padding: "20px 10%"
    }}>
        <div style={{
        display: 'flex',
        gap: 10,
        alignItems: "center"
                  }}>
            <img src='./images/logo.png' alt='logo' width="140"/>
        
            <ul style={{
                listStyle: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: 48
            }}>
                <li>
                    <Link to='/' style={{
                        textDecoration:'none',
                        color: 'white',
                        fontSize: 17
                    }}>Home</Link>
                </li>
                <li>
                    <Link to='/teachers' style={{
                        textDecoration:'none',
                        color: 'white',
                        fontSize: 17
                    }}>About US</Link>
                </li>
                <li>
                    <Link to='/holidays' style={{
                        textDecoration:'none',
                        color: 'white',
                        fontSize: 17
                    }}>Case Studies</Link>
                </li>
                <li>
                    <Link to='/contact-us' style={{
                        textDecoration:'none',
                        color: 'white',
                        fontSize: 17,
                    }}>Resources</Link>
                </li>
            </ul>
            </div>
            <div style={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <img src='./images/search-icon.png' alt='search' width= '20' />
            </div>
    </nav>
    <hr style={{margin: '0', height: '1px', backgroundColor:'white'}}/>
    </div>
  )
}

export default Nav
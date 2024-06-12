import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div 
    style={{
        background: '#dfdfdf',
        padding: 120,
        display: 'flex',
        justifyContent: 'space-evenly'
          }}
    >
      <div style={{
      color:'white',
      width: '100%',
      paddingTop: '0px',
      margin: '0px',
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }}>
      <img src="./images/logo.png" alt="logo" width='190px' height='60px'/>
      <p>We are a Collaboration of non-government <br/> organization and professionals working to <br/> ensure that government spending.</p>
      <ul style={{
         listStyle:'none',
         display:'flex',
         margin:0,
         padding:0,
         gap:16,
      }}>
      <li>
          <Link to='https://sauravtiwari.com.np/'  
          style={{
          textDecoration : 'none',
          color: 'white',
        }}>
          <i className="ri-profile-line" style={{marginRight:10}}></i>
          </Link>
        </li>
        <li>
          <Link to='https://www.instagram.com/sau.ra.v/' style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-instagram-line" style={{marginRight:10}}></i>
          </Link>
        </li><li>
          <Link to='https://www.linkedin.com/in/saurav-tiwari-4a4826298/'style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-linkedin-box-line" style={{marginRight:10}}></i>
           </Link>
        </li>
      </ul>
      </div>

    
      
      <div style={{
        color:'white',
        width: '100%',
        padding: '0px',
        margin: '0px',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <div>
      <h3>Popular Links</h3>
      <ul style={{
        listStyle:'none',
        display:'flex',
        margin:0,
        padding:0,
        flexDirection:'column',
        gap:16,
        
      }}>
        <li>
          <Link to='/'  
          style={{
          textDecoration : 'none',
          color: 'white'
        }}>
          <i className="ri-home-line" style={{marginRight:10}}></i>
          Home</Link>
        </li>
        <li>
          <Link to='/teachers' style={{
          textDecoration : 'none',
          color: 'white'
        }}>
          <i className="ri-presentation-line" style={{marginRight:10}}></i>
          Teachers
          </Link>
        </li><li>
          <Link to='/holidays'style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-command-line" style={{marginRight:10}}></i>
           Holidays</Link>
        </li><li>
          <Link to='/contact-us'style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-contacts-book-line" style={{marginRight:10}}></i>Contact Us</Link>
        </li>
      </ul>
      </div>
      <div>
      <h3>Social Links</h3>
      <ul style={{
        listStyle:'none',
        display:'flex',
        margin:0,
        padding:0,
        flexDirection:'column',
        gap:16,
        
      }}>
        <li>
          <Link to='https://sauravtiwari.com.np/'  
          style={{
          textDecoration : 'none',
          color: 'white',
        }}>
          <i className="ri-profile-line" style={{marginRight:10}}></i>
          Protfolio
          </Link>
        </li>
        <li>
          <Link to='https://www.instagram.com/sau.ra.v/' style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-instagram-line" style={{marginRight:10}}></i>
          Instagram
          </Link>
        </li><li>
          <Link to='https://www.linkedin.com/in/saurav-tiwari-4a4826298/'style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-linkedin-box-line" style={{marginRight:10}}></i>
           Linkedin
           </Link>
        </li><li>
          <Link to='https://x.com/saurav05tiwari'style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-twitter-line" style={{marginRight:10}}></i>
          Twitter
          </Link>
        </li>
      </ul>
      </div>

      <div>
      <h3>Social Links</h3>
      <ul style={{
        listStyle:'none',
        display:'flex',
        margin:0,
        padding:0,
        flexDirection:'column',
        gap:16,
        
      }}>
        <li>
          <Link to='https://sauravtiwari.com.np/'  
          style={{
          textDecoration : 'none',
          color: 'white',
        }}>
          <i className="ri-profile-line" style={{marginRight:10}}></i>
          Protfolio
          </Link>
        </li>
        <li>
          <Link to='https://www.instagram.com/sau.ra.v/' style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-instagram-line" style={{marginRight:10}}></i>
          Instagram
          </Link>
        </li><li>
          <Link to='https://www.linkedin.com/in/saurav-tiwari-4a4826298/'style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-linkedin-box-line" style={{marginRight:10}}></i>
           Linkedin
           </Link>
        </li><li>
          <Link to='https://x.com/saurav05tiwari'style={{
          textDecoration : 'none',
          color: 'white'
        }}>
           <i className="ri-twitter-line" style={{marginRight:10}}></i>
          Twitter
          </Link>
        </li>
      </ul>
      </div>
      </div>
      

    </div>
  )
}

export default Footer
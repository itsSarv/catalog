import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div 
      style={{       
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'url(./images/footer.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          zIndex: -1,
        }}
      />
      <div 
        style={{
          background: 'rgba(41, 84, 120, 0.9)',
          padding: 120,
          display: 'flex',
          justifyContent: 'space-evenly',
        }}
      >
        <div style={{
          color: 'white',
          width: '100%',
          paddingTop: '0px',
          margin: '0px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }}>
          <img src="./images/logo.png" alt="logo" width='190px' height='60px'/>
          <p>We are a Collaboration of non-government <br/> organization and professionals working to <br/> ensure that government spending.</p>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            margin: 0,
            padding: 0,
            gap: 16,
          }}>
            <li>
              <Link to='https://sauravtiwari.com.np/'  
                style={{
                  textDecoration : 'none',
                  color: 'white',
                }}>
                <i className="ri-profile-line" style={{marginRight: 10}}></i>
              </Link>
            </li>
            <li>
              <Link to='https://www.instagram.com/sau.ra.v/' style={{
                textDecoration : 'none',
                color: 'white',
              }}>
                <i className="ri-instagram-line" style={{marginRight: 10}}></i>
              </Link>
            </li>
            <li>
              <Link to='https://www.linkedin.com/in/saurav-tiwari-4a4826298/'style={{
                textDecoration : 'none',
                color: 'white',
              }}>
                <i className="ri-linkedin-box-line" style={{marginRight: 10}}></i>
              </Link>
            </li>
          </ul>
        </div>

        <div style={{
          color: 'white',
          width: '100%',
          padding: '0px',
          margin: '0px',
          display: 'flex',
          justifyContent: 'space-around',
        }}>
          <div>
            <h3>Links</h3>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              margin: 0,
              padding: 0,
              flexDirection: 'column',
              gap: 16,
            }}>
              <li>
                <Link to='/'  
                  style={{
                    textDecoration : 'none',
                    color: 'white',
                  }}>
                  Campaigns
                </Link>
              </li>
              <li>
                <Link to='/' style={{
                  textDecoration : 'none',
                  color: 'white',
                }}>
                  Resources
                </Link>
              </li>
              <li>
                <Link to='/' style={{
                  textDecoration : 'none',
                  color: 'white',
                }}>    
                  News
                </Link>
              </li>
              <li>
                <Link to='/' style={{
                  textDecoration : 'none',
                  color: 'white',
                }}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Resources</h3>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              margin: 0,
              padding: 0,
              flexDirection: 'column',
              gap: 16,
            }}>
              <li>
                <Link to='/'  
                  style={{
                    textDecoration : 'none',
                    color: 'white',
                  }}>
               
                  Transparency Toolkit
                </Link>
              </li>
              <li>
                <Link to='/' style={{
                  textDecoration : 'none',
                  color: 'white',
                }}>
                  Evidence
                </Link>
              </li>
              <li>
                <Link to='/'style={{
                  textDecoration : 'none',
                  color: 'white',
                }}>
                  Best Practices
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3>Work with Us</h3>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              margin: 0,
              padding: 0,
              flexDirection: 'column',
              gap: 16,
            }}>
              <li>
                <Link to='/'  
                  style={{
                    textDecoration : 'none',
                    color: 'white',
                  }}>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to='/' style={{
                  textDecoration : 'none',
                  color: 'white',
                }}>
                  Join Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

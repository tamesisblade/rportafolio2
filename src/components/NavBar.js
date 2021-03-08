import React,{useEffect, useState} from 'react';
import {Link } from 'react-router-dom';
import { motion } from 'framer-motion';
const NavBar = () => {
const [active, setActive] = useState();
useEffect(() => {
    let currentURL = window.location.href
    console.log(currentURL);
    if(currentURL.endsWith('/'))
        setActive('About');
    else if(currentURL.endsWith('/proyectos'))
        setActive('Proyectos');
    else if(currentURL.endsWith('/resumen')) 
        setActive('Resumen');     
    
}, [active]);

const navbar_variant = {
    hidden:{
        y:'-30vh',
        opacity:0
    },
    visible:{
        y:0,
        opacity:1,
        transition:{
            delay:0.2,
            duration:0.7,
            type:'spring'

        }

    }
}

    return ( 
        <motion.div className="navbar"
            variants = { navbar_variant }
            initial = 'hidden'
            animate = 'visible'
        >
            <div className="navbar__active">
               { active }
            </div>
            <div className="navbar__items">
                { active !== 'About' && 
                   <Link to="/">
                        <div 
                            onClick = { () => setActive('About') }
                            className="navbar__item">
                            About
                        </div>
                    </Link>
                }

                { active !== 'Resumen' 
                 ?
                    <Link to="/resumen">
                        <div 
                        onClick = { () => setActive('Resumen') }
                        className="navbar__item">
                        Resumen
                        </div>
                    </Link>
                 :null
                }
              
                {
                  active !== 'Proyectos' && 
                  <Link to="/proyectos">
                        <div 
                        onClick = { () => setActive('Proyectos') }
                        className="navbar__item">
                        Proyectos
                        </div>
                    </Link> 
                }
                
            </div>
                
        </motion.div>
        );
     
}
 
export default NavBar;
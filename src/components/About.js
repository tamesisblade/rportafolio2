import React from 'react';

import { motion } from 'framer-motion'
import Skillcard from './Skillcard';
import { skills } from './data/about_data';
const About = () => {

    

    const about_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                dealy: 0.2, duration: 0.6,
            }
        },
        exit: {
            opacity: 0,
            transition: {
                ease: 'easeInOut'
            }
        }
    }    

    return ( 
        <motion.div className="about"
            variants={about_variants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <h6 className="about__intro">
                Me considero una persona que le gusta aprender,Y soy muy responsable con mi trabajo me encanta la puntualidad
            </h6>
            <div className="container about__container">
                <h6 className="about__heading">Mis Servicios</h6>
                <div className="row">
                    {
                        skills.map(skill =>
                            <Skillcard skill={skill} />

                        )
                    }
                </div>
            </div>
        </motion.div>
     );
}
 
export default About;
import React from 'react';

import Bar from './Bar';
import { motion } from 'framer-motion';
import { languages, tools } from './data/resumen_data';
const Resumen = () => {
    

    const resume_variants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.2, duration: 0.6,
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
    <motion.div className="container resume"
        variants={resume_variants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        <div className="row uno">
            <div className="col-lg-6 resume-card" >
                <h4 className="resume-card__heading">
                    Educacion
                </h4>
                <div className="resume-card__body">
                    <h5 className="resume-card__title">
                        Tecnologo Analista de Sistemas
                    </h5>
                    <p className="resume-card__name">
                        Instituto Cordillera(2013-2020)
                    </p>
                    <p className="resume-card__details">Actualmente me encuentro mejorando conocimientos</p>
                </div>
            </div>
            <div className="col-lg-6 resume-card" >
                <h4 className="resume-card__heading">
                    Experiencia
                </h4>
                <div className="resume-card__body">
                    <h5 className="resume-card__title">
                        Freenlance
                    </h5>
                    <p className="resume-card__name">
                        Actualmente soy Freelancer (2020)
                    </p>
                    <p className="resume-card__details">He trabajado de manera freelance con proyectos con laravel creando platoformas, ayudando en desarrollos </p>
                </div>
            </div>
        </div>

        <div className="row ">
            <div className="col-lg-6 resume-languages ">
                <h5 className="reume-language__heading">
                    Lenguajes y Frameworks
                </h5>
                <div className="resume-language__body mt-3">
                    {
                        languages.map(language =>
                            <Bar value={language} />
                        )
                    }
                </div>
            </div>
            <div className="col-lg-6 resume-languages">
                <h5 className="reume-language__heading">
                    Herramientas y Softwares
                </h5>
                <div className="resume-language__body mt-3">
                    {
                        tools.map(tool => <Bar value={tool} />)
                    }
                </div>
            </div>
        </div>
    </motion.div>
     );
}
 
export default Resumen;

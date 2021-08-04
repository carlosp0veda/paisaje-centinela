import React from 'react'
import styles from './Socials.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import {motion} from 'framer-motion'

const Socials = () => {
    return (
        <div className={styles.Socials}>
            <motion.span whileHover={{scale:1.3}} whileTap={{scale: 1.1}}>
            <a href="https://www.facebook.com/funerariaelalba/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon style={{color:'#64646b'}} size="3x" icon={faFacebookF} /></a>
            </motion.span>
            <motion.span whileHover={{scale:1.3}} whileTap={{scale: 1.1}}>
            <a href="https://api.whatsapp.com/send?phone=50582914414&text=Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios." target="_blank" rel="noreferrer"><FontAwesomeIcon style={{color:'#64646b'}} size="3x" icon={faWhatsapp} /></a>
            </motion.span>
            <motion.span whileHover={{scale:1.3}} whileTap={{scale: 1.1}}>
            <a href="mailto:info@funerariaelalba.com">
                 <FontAwesomeIcon style={{color:'#64646b'}} size="3x" icon={faEnvelope} />
            </a>
            </motion.span>
          </div>
    )
}

export default Socials

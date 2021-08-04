import React from 'react'
import styles from './WhatsappButton.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons";
const WhatsappButton = () => {
    return (
        
            <a className={styles.pushable} href="https://api.whatsapp.com/send?phone=50582914414&text=Me%20gustar%C3%ADa%20conocer%20m%C3%A1s%20sobre%20sus%20servicios." target="_blank" rel="noreferrer">
                <span className={styles.shadow}></span>
                <span className={styles.edge}></span>
                <span className={styles.front}><FontAwesomeIcon icon={faWhatsapp} />Solicitar información...</span>
            </a>
    )
}

export default WhatsappButton

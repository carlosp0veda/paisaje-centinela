import React from 'react'
import styles from './EmergencyCTA.module.css'

const EmergencyCTA = () => {
    return (
        <a className={styles.pushable} href="tel:+50522493584">

         <span className={styles.shadow}></span>
        <span className={styles.edge}></span>
        <span className={styles.front}>EMERGENCIA FUNERARIA <br/><small>(APRETAR PARA LLAMAR INMEDIATAMENTE)</small> </span>
        </a>
    )
}

export default EmergencyCTA

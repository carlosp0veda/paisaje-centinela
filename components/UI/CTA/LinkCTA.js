import React from 'react'
import styles from './LinkCTA.module.css'
import {motion} from 'framer-motion'
import Link from 'next/link'

const LinkCTA = (props) => {
    return (
      
        <motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 1 }} className={[
      styles.LinkCTAWrapper,
      styles[props.ctaType],
      styles[props.ctaBorder], styles[props.ctaAlign]
    ].join(" ")}>  <Link className={[
      styles.LinkCTA, 'Light'
    ].join(" ")} href={props.url}>
        {props.text}</Link>
    </motion.div>
    
    )
}

export default LinkCTA


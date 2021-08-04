import React from 'react'
import styles from './Button.module.css'
import {motion} from 'framer-motion'

const Button = (props) => {
    return (
        <motion.button whileTap={{ scale: 0.9 }} className={styles.Button}>{props.children}
        </motion.button>
    )
}

export default Button

import React from 'react'
import styles from './LoadingComponent.module.css'
import loader from '../../../assets/loader.svg'

const LoadingComponent = () => {
    return (
        <div className={styles.loader}>
            <img src={`${loader}`} alt='temporal'/>
        </div>
    )
}

export default LoadingComponent

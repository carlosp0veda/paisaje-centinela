import React from 'react'
import classes from './PhoneAnimation.module.css'

const PhoneAnimation = () => {
    return (
        <div className={classes.wrapper}>
    <div className={classes.ring}>
        <div className={[classes.coccocalophone, classes.coccocalogreen, classes.coccocaloshow]}>
            <div className={classes.coccocalophcircle}></div>
            <div className={classes.coccocalophcirclefill}></div>
            <div className={classes.coccocalophimgcircle}></div>
        </div>
    </div>
</div>
    )
}

export default PhoneAnimation

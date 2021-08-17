import styles from './badge.module.css' 
 
 const Badge = (props) => {
    if (props.children === null) {
        return null
    } 
    return (
         <span className={styles.badge} key={props.children}>{props.children}</span>
    )
}

export default Badge

 
 
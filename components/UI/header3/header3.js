import styles from './header3.module.css'

const Header3 = (props) => {
    return (
        <h3 className={styles.h3}>{props.children}</h3>
    )
}

export default Header3

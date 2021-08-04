import styles from './header4.module.css'

const Header4 = (props) => {
    return (
        <h4 className={styles.headers}>{props.children}</h4>
    )
}

export default Header4

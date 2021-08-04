import Breadcrumbs from 'nextjs-breadcrumbs'
import styles from './breadcrumbs.module.css'

const CustomBreadcrumbs = (props) => {
    return (
        <div>
            <Breadcrumbs rootLabel='Inicio' transformLabel={(title) => title.charAt(0).toUpperCase() + title.slice(1).split('-').join(' ')} activeItemClassName={props.customActiveItemClassName ? props.customActiveItemClassName : styles.breadcrumbsActive} inactiveItemClassName={styles.breadcrumbsInactive} listClassName={styles.breadcrumbsList} containerClassName={styles.breadcrumbsContainer}/>
        </div>
    )
}

export default CustomBreadcrumbs

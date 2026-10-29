import Breadcrumbs from 'nextjs-breadcrumbs'
import styles from './breadcrumbs.module.css'

const formatLabel = (title) => {
    let label = title
    try {
        label = decodeURIComponent(title)
    } catch (e) {}
    label = label.replace(/[-_]+/g, ' ')
    return label.charAt(0).toUpperCase() + label.slice(1)
}

const CustomBreadcrumbs = (props) => {
    return (
        <div className={styles.breadcrumbsBar}>
            <Breadcrumbs rootLabel='Inicio' transformLabel={formatLabel} activeItemClassName={props.customActiveItemClassName ? props.customActiveItemClassName : styles.breadcrumbsActive} inactiveItemClassName={styles.breadcrumbsInactive} listClassName={styles.breadcrumbsList} containerClassName={`container ${styles.breadcrumbsContainer}`}/>
        </div>
    )
}

export default CustomBreadcrumbs

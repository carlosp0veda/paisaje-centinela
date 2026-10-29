import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from './breadcrumbs.module.css'

const formatLabel = (title) => {
    let label = title
    try {
        label = decodeURIComponent(title)
    } catch (e) {}
    label = label.replace(/[-_]+/g, ' ')
    return label.charAt(0).toUpperCase() + label.slice(1)
}

// Solo la ruta: el servidor no conoce ni la query ni el hash, y así no hay
// diferencias al hidratar.
const getSegments = (asPath) => {
    const path = asPath.split(/[?#]/)[0]
    const parts = path.split('/').filter(Boolean)
    return parts.map((part, i) => ({
        label: part,
        href: '/' + parts.slice(0, i + 1).join('/'),
    }))
}

const CustomBreadcrumbs = (props) => {
    const {asPath} = useRouter()
    const segments = getSegments(asPath)
    const activeClassName = props.customActiveItemClassName ? props.customActiveItemClassName : styles.breadcrumbsActive
    return (
        <div className={styles.breadcrumbsBar}>
            <nav className={`container ${styles.breadcrumbsContainer}`} aria-label="breadcrumbs">
                <ol className={styles.breadcrumbsList}>
                    <li className={styles.breadcrumbsInactive}>
                        <Link href="/">Inicio</Link>
                    </li>
                    {segments.map((segment, i) => (
                        <li key={segment.href} className={i === segments.length - 1 ? activeClassName : styles.breadcrumbsInactive}>
                            <Link href={segment.href}>{formatLabel(segment.label)}</Link>
                        </li>
                    ))}
                </ol>
            </nav>
        </div>
    )
}

export default CustomBreadcrumbs

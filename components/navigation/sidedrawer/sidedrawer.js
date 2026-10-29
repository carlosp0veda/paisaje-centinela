import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from "./sidedrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NAV_LINKS, isActive} from '../navLinks'

const SideDrawer = (props) => {
  const {pathname} = useRouter()
  let attachedStyles = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }
  return (
    <>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={attachedStyles.join(" ")} onClick={props.closed} aria-hidden={!props.open}>
        <Link href="/">
          <a className={styles.logo}>
            <span className={styles.wordmark}>Paisaje Centinela</span>
            <span className={styles.nicaraguahonduras}>nicaragua-honduras</span>
          </a>
        </Link>
        <nav aria-label="Principal">
          <ul className={styles.list}>
            {NAV_LINKS.map(link => (
              <li key={link.href}>
                <Link href={link.href}>
                  <a className={[styles.listLink, isActive(pathname, link.href) ? styles.active : ''].join(' ')} tabIndex={props.open ? 0 : -1}>{link.label}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <a className={styles.partner} href='https://www.catie.ac.cr' target="_blank" rel="noopener noreferrer" tabIndex={props.open ? 0 : -1}>
          <img src='/images/catie.png' alt="CATIE" />
        </a>
      </div>
    </>
  );
};

export default SideDrawer;

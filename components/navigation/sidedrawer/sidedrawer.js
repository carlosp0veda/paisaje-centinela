import Image from 'next/image'
import Link from 'next/link'
import styles from "./sidedrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  let attachedStyles = [styles.SideDrawer, styles.Close];
  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }

  console.log(attachedStyles)

  return (
    <>
      <Backdrop clicked={props.closed} show={props.open} />
      <div className={[attachedStyles.join(" ")]} onClick={props.closed}>
         <Link href="/">
        <a>
            <div  className={styles.logoWrapper}>
                <div className={styles.logo} whileTap={{scale: 0.9}}>
                    <h2>Paisaje Centinela</h2>
                    <p className={styles.nicaraguahonduras}>nicaragua-honduras</p>
                </div>
            </div>
        </a>
        </Link>
        <nav>
          <ul className={styles.list}>
                <li className={styles.listItem} ><Link href='/acerca'><a className={styles.listLink}>Paisaje Centinela</a></Link></li>
                <li className={styles.listItem} ><Link href='/articulos'><a  className={styles.listLink}>Artículos</a></Link></li>
                <li className={styles.listItem} ><Link href='/recursos/publicaciones'><a className={styles.listLink}>Recursos</a></Link></li>
                <li className={styles.listItem} ><Link href='/investigadores'><a  className={styles.listLink}>Equipo</a></Link></li>
            </ul>
        </nav>
      </div>
    </>
  );
};

export default sideDrawer;

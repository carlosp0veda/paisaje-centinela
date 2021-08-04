import Link from "next/link";
import styles from './pagination.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

export default function Pagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled } = props;

  const prevPageUrl =
    currentPage === "2"
      ? "/recursos/publicaciones"
      : `/recursos/publicaciones/pagina/${parseInt(currentPage, 10) - 1}`;

  const nextPageUrl = `/recursos/publicaciones/pagina/${parseInt(currentPage, 10) + 1}`;

  return (
    <ol className={styles.list}>
      <li className={styles.item}>
        {prevDisabled && <FontAwesomeIcon icon={faAngleDoubleLeft}/>}
        {!prevDisabled && (
          <Link href={prevPageUrl}>
            <a><FontAwesomeIcon icon={faAngleDoubleLeft}/></a>
          </Link>
        )}
      </li>
      <li  className={styles.item} style={{padding: "0 8px"}}>
        Página {currentPage} de {totalPages}
      </li>
      <li className={styles.item}>
        {nextDisabled && <FontAwesomeIcon icon={faAngleDoubleRight}/>}
        {!nextDisabled && (
          <Link href={nextPageUrl}>
            <a><FontAwesomeIcon icon={faAngleDoubleRight}/></a>
          </Link>
        )}
      </li>
    </ol>
  );
}
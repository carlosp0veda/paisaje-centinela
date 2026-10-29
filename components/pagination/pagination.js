import styles from './pagination.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import {ACTIONS} from '../../store/actions'

export default function Pagination(props) {
  const { totalPages, currentPage, prevDisabled, nextDisabled, dispatch } = props;

  return (
    <nav className={styles.list} aria-label="Paginación">
      <button className={styles.button} disabled={prevDisabled} onClick={() => dispatch({type: ACTIONS.PREV})} aria-label="Página anterior">
        <FontAwesomeIcon icon={faAngleLeft}/> Anterior
      </button>
      <p className={styles.item}>
        Página <strong>{currentPage}</strong> de {totalPages}
      </p>
      <button className={styles.button} disabled={nextDisabled} onClick={() => dispatch({type: ACTIONS.NEXT})} aria-label="Página siguiente">
        Siguiente <FontAwesomeIcon icon={faAngleRight}/>
      </button>
    </nav>
  );
}

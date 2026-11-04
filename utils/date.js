// En UTC para que el servidor y el navegador muestren la misma fecha al hidratar.
const formatter = new Intl.DateTimeFormat('es', {day: 'numeric', month: 'short', year: 'numeric', timeZone: 'UTC'})

export const formatFecha = (iso) => iso ? formatter.format(new Date(iso)) : ''

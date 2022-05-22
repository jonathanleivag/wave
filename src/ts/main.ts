import '../css/style.css'
import '../fonts/Raleway/Raleway.css'

/* Preventing the right click menu from appearing. */
window.onload = () => {
  document.addEventListener(
    'contextmenu',
    event => event.preventDefault(),
    false
  )
}

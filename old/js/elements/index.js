import { SeatInputElement } from './seatInput.js'
import { SeatsDataInputElement } from './seatsDataInput.js'

export const init = () => {
	customElements.define("seat-input", SeatInputElement)
	customElements.define("seats-data-input", SeatsDataInputElement)
}

export class SeatInputElement extends HTMLElement {
	constructor() {
		super()
		this.count = 0
	}
	set() {
		this.innerHTML = ''

		this.append(document.querySelector('#seatInputElement').content.cloneNode(true))
		this.countElement = this.querySelector('.count')
		this.incrementButton = this.querySelector('.increment')
		this.decrementButton = this.querySelector('.decrement')
		this.incrementButton.addEventListener('click', e => {
			this.setCount(this.count + 1)
			this.dispatchEvent(new CustomEvent('countChanged', {
				detail: {
					count: this.count
				}
			}))
		})
		this.decrementButton.addEventListener('click', e => {
			if (this.count <= 0) {
				return
			}
			this.setCount(this.count - 1)
			this.dispatchEvent(new CustomEvent('countChanged', {
				detail: {
					count: this.count
				}
			}))
		})
	}
	connectedCallback() {
		this.set()
	}

	setCount(number) {
		this.countElement.textContent = number
		this.count = number
	}
}

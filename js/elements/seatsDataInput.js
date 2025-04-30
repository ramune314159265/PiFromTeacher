export class SeatsDataInputElement extends HTMLElement {
	constructor() {
		super()

		this.seatWidth = 6
		this.seatHeight = 6
		this.createSeatData(6, 6)
	}
	set() {
		this.innerHTML = ''

		const maxSeatValue = Math.max(...this.data.flat())
		this.data.forEach((y, yi) => {
			y.forEach((x, xi) => {
				const element = document.createElement('seat-input')
				this.append(element)
				element.setCount(x)
				element.setRatioFromMax(x / maxSeatValue)
				element.addEventListener('countChanged', e => {
					this.setSeatCount(xi, yi, e.detail.count)
				})
			})
		})

		this.style.gridTemplateColumns = `repeat(${this.seatWidth}, 1fr)`
		this.style.gridTemplateRows = `repeat(${this.seatHeight}, 1fr)`
	}
	connectedCallback() {
		this.set()
	}

	createSeatData(width, height) {
		this.seatWidth = width
		this.seatHeight = height
		this.data = [...Array(height)].map(() => Array(width).fill(0))
	}
	setSeatCount(x, y, value) {
		this.data[y][x] = value
		this.set()
	}
}

export class MainUi {
	constructor() {
		this.fragment = document.createDocumentFragment()
		this.fragment.append(document.querySelector('#mainUi').content.cloneNode(true))
	}
	show() {
		document.querySelector('main').append(this.fragment)
		this.set()
	}
	set(){

	}
}

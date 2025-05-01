import { init } from './elements/index.js'
import { MainUi } from './ui/main.js'

export const loaded = () => {
	init()
	new MainUi().show()
}

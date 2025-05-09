import { Grid } from '@chakra-ui/react'
import { Header } from './components/Header'
import { ResultPanel } from './components/ResultsPanel'
import { SeatsPanel } from './components/SeatsPanel'

function App() {
	return (
		<>
			<Grid templateRows="3rem calc(100% - 3rem)" w="100%" h="100%">
				<Header></Header>
				<Grid templateRows="80% 1fr" w="full" h="full" overflowY="scroll">
					<SeatsPanel></SeatsPanel>
					<ResultPanel></ResultPanel>
				</Grid>
			</Grid>
		</>
	)
}

export default App

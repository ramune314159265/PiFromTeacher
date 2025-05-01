import { Grid } from '@chakra-ui/react'
import { Header } from './components/Header'
import { SeatsData } from './components/SeatsData'

function App() {
	return (
		<>
			<Grid templateRows="3rem calc(100% - 3rem)" w="100%" h="100%">
				<Header></Header>
				<Grid gap={4} p={4} templateColumns="repeat(2, calc(50% - calc(2rem / 2)))" templateRows="repeat(3, calc(33.3% - calc(2rem / 3)))" w="full" h="full">
					<SeatsData width={6} height={6}></SeatsData>
				</Grid>
			</Grid>
		</>
	)
}

export default App

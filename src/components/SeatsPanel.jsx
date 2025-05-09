import { Button, Flex, Grid } from '@chakra-ui/react'
import { useSeatsData } from '../atoms/seatsData'
import { useDotPoses } from '../atoms/dotPoses'
import { randomPlot } from '../calculate/plot/random'
import { SeatsData } from './SeatsData'
import { SeatsInfo } from './SeatsInfo'

export const SeatsPanel = () => {
	const [seatsData] = useSeatsData()
	const [dotPoses, { setDotPoses }] = useDotPoses()

	return (
		<Grid templateColumns="repeat(2, calc(calc(768px - 1rem) / 2))" gap={4} justifyContent="center">
			<Flex justify="end" alignItems="center">
				<SeatsData width={6} height={6}></SeatsData>
			</Flex>
			<Flex direction="column" justify="center" align="flex-start" gap={4}>
				<SeatsInfo></SeatsInfo>
				<Button w="full" onClick={() => setDotPoses(randomPlot(seatsData))}>円周率を計算</Button>
			</Flex>
		</Grid>
	)
}

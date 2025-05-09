import { Button, Flex, For, Grid, NativeSelectField, NativeSelectIndicator, NativeSelectRoot } from '@chakra-ui/react'
import { useState } from 'react'
import { useDotPoses } from '../atoms/dotPoses'
import { useSeatsData } from '../atoms/seatsData'
import { plots } from '../calculate/plot'
import { SeatsData } from './SeatsData'
import { SeatsInfo } from './SeatsInfo'

export const SeatsPanel = () => {
	const [seatsData] = useSeatsData()
	const [dotPoses, { setDotPoses }] = useDotPoses()
	const [plotIndex, setPlotIndex] = useState(0)

	return (
		<Grid templateColumns="repeat(2, calc(calc(768px - 1rem) / 2))" gap={4} justifyContent="center">
			<Flex justify="end" alignItems="center">
				<SeatsData width={6} height={6}></SeatsData>
			</Flex>
			<Flex direction="column" justify="center" align="flex-start" gap={4}>
				<SeatsInfo></SeatsInfo>
				<Grid templateColumns="8rem 1fr" w="full" gap={4}>
					<NativeSelectRoot>
						<NativeSelectField
							w="full"
							value={plotIndex}
							onChange={e => setPlotIndex(e.currentTarget.value)}
						>
							<For each={plots}>
								{(plot, index) => (
									<option value={index} key={index}>{plot.name}</option>
								)}
							</For>
						</NativeSelectField>
						<NativeSelectIndicator></NativeSelectIndicator>
					</NativeSelectRoot>
					<Button w="full" onClick={() => setDotPoses(plots[plotIndex].plot(seatsData))}>円周率を計算</Button>
				</Grid>
			</Flex>
		</Grid>
	)
}

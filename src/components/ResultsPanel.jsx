import { For, Grid } from '@chakra-ui/react'
import { shapes } from '../calculate/shape'
import { ShapeResult } from './ShapeResult'

export const ResultPanel = () => {
	return (
		<Grid gridTemplateColumns={`repeat(${shapes.length}, 300px)`} gap={4} p={4} w="full" h="full" overflowX="scroll" overflowY="hidden">
			<For each={shapes}>
				{(shape, index) => (
					<ShapeResult shape={shape}></ShapeResult>
				)}
			</For>
		</Grid>
	)
}

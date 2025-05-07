import { Grid } from '@chakra-ui/react'
import { Seat } from './Seat'

export const SeatsData = ({ width, height }) => {
	return (
		<Grid
			templateRows={`repeat(${height}, 1fr)`}
			templateColumns={`repeat(${width}, 1fr)`}
			p={2}
			gap={1}
			w="400px"
			h="300px"
			background="bg.subtle"
			borderRadius="md"
		>
			{
				Array(width * height).fill(0).map((_, i) => {
					return (
						<Seat key={i} x={i % height} y={Math.floor(i / height)}></Seat>
					)
				})
			}
		</Grid>
	)
}

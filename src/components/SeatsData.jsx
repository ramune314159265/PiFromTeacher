import { Grid } from '@chakra-ui/react'
import { Seat } from './Seat'

export const SeatsData = ({ width, height }) => {
	return (
		<Grid templateRows={`repeat(${height}, 1fr)`} templateColumns={`repeat(${width}, 1fr)`}>
			{
				Array(width * height).fill(0).map((_, i) => {
					return (
						<Seat key={i}></Seat>
					)
				})
			}
		</Grid>
	)
}

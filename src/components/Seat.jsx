import { Box, NumberInputControl, NumberInputInput, NumberInputRoot } from '@chakra-ui/react'
import { useSeatsData } from '../atoms/seatsData'

export const Seat = ({ x, y }) => {
	const [seatsData, { setSeatValue }] = useSeatsData()

	const maxSeatValue = Math.max(...seatsData.flat())
	return (
		<Box
			w="full"
			h="full"
			borderRadius="md"
			background="bg"
		>
			<NumberInputRoot
				w="full"
				h="full"
				borderRadius="md"
				style={{ backgroundColor: `rgb(255 0 0 / ${seatsData[y][x] / maxSeatValue})` }}
				size="sm"
				min={0}
				max={100}
				value={seatsData[y][x]}
				onValueChange={e => setSeatValue({ x, y, value: parseInt(e.value) })}
			>
				<NumberInputControl></NumberInputControl>
				<NumberInputInput h="full"></NumberInputInput>
			</NumberInputRoot>
		</Box>
	)
}

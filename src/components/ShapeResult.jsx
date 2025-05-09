import { Box, Heading } from '@chakra-ui/react'
import { useDotPoses } from '../atoms/dotPoses'

export const ShapeResult = ({ shape }) => {
	const [dotPoses, { setDotPoses }] = useDotPoses()

	return (
		<Box w="300px" h="full">
			<Heading size="xl">{shape.name}</Heading>
		</Box>
	)
}

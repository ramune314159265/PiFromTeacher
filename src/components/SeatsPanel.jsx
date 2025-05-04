import { Button, Flex, Grid } from '@chakra-ui/react'
import { SeatsData } from './SeatsData'
import { SeatsInfo } from './SeatsInfo'

export const SeatsPanel = () => {
	return (
		<Grid templateColumns="repeat(2, calc(calc(768px - 1rem) / 2))" gap={4} justifyContent="center">
			<Flex justify="end" alignItems="center">
				<SeatsData width={6} height={6}></SeatsData>
			</Flex>
			<Flex direction="column" justify="center" align="flex-start" gap={4}>
				<SeatsInfo></SeatsInfo>
				<Button w="full">円周率を計算</Button>
			</Flex>
		</Grid>
	)
}

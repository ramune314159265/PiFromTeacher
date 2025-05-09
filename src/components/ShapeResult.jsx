import { DataListItem, DataListItemLabel, DataListItemValue, DataListRoot, Flex, Heading } from '@chakra-ui/react'
import { useDotPoses } from '../atoms/dotPoses'

export const ShapeResult = ({ shape }) => {
	const [dotPoses, { setDotPoses }] = useDotPoses()
	const dotTestPassed = dotPoses.filter(e => shape.test(...e))

	return (
		<Flex direction="column" w="300px" h="full" gap={4}>
			<Heading size="xl">{shape.name}</Heading>
			<DataListRoot orientation="horizontal" size="md" w="full">
				<DataListItem>
					<DataListItemLabel>円の中の点</DataListItemLabel>
					<DataListItemValue>{`${dotTestPassed.length} / ${dotPoses.length}`}</DataListItemValue>
				</DataListItem>
				<DataListItem>
					<DataListItemLabel>求めた円周率</DataListItemLabel>
					<DataListItemValue>{Math.round((dotTestPassed.length / dotPoses.length * 4) * 10000) / 10000}</DataListItemValue>
				</DataListItem>
				<DataListItem>
					<DataListItemLabel>実際との割合</DataListItemLabel>
					<DataListItemValue>{`${Math.round(((dotTestPassed.length / dotPoses.length * 4) / Math.PI * 100) * 10000) / 10000} %`}</DataListItemValue>
				</DataListItem>
			</DataListRoot>
		</Flex>
	)
}

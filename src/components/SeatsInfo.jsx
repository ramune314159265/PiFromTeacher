import { DataListItem, DataListItemLabel, DataListItemValue, DataListRoot } from '@chakra-ui/react'

export const SeatsInfo = () => {
	return (
		<DataListRoot orientation="horizontal" size="lg" w="full">
			<DataListItem>
				<DataListItemLabel>合計</DataListItemLabel>
				<DataListItemValue>1</DataListItemValue>
			</DataListItem>
			<DataListItem>
				<DataListItemLabel>平均</DataListItemLabel>
				<DataListItemValue>1</DataListItemValue>
			</DataListItem>
			<DataListItem>
				<DataListItemLabel>最大値</DataListItemLabel>
				<DataListItemValue>1</DataListItemValue>
			</DataListItem>
		</DataListRoot>
	)
}

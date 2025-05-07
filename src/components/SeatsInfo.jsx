import { DataListItem, DataListItemLabel, DataListItemValue, DataListRoot } from '@chakra-ui/react'
import { useSeatsData } from '../atoms/seatsData'

export const SeatsInfo = () => {
	const [seatsData] = useSeatsData()
	const seatDataFlat = seatsData.flat()

	return (
		<DataListRoot orientation="horizontal" size="md" w="full">
			<DataListItem>
				<DataListItemLabel>合計</DataListItemLabel>
				<DataListItemValue>{seatDataFlat.reduce((p, c) => p + c)}</DataListItemValue>
			</DataListItem>
			<DataListItem>
				<DataListItemLabel>平均</DataListItemLabel>
				<DataListItemValue>{seatDataFlat.reduce((p, c) => p + c) / seatDataFlat.length}</DataListItemValue>
			</DataListItem>
			<DataListItem>
				<DataListItemLabel>最大値</DataListItemLabel>
				<DataListItemValue>{Math.max(...seatDataFlat)}</DataListItemValue>
			</DataListItem>
		</DataListRoot>
	)
}

import { atom, useAtom } from 'jotai'
import { useEffect } from 'react'

export const seatsDataAtom = atom(localStorage.getItem('ramune314159265.piFromTeacher.seatsData') === null ?
	Array(6).fill(0).map(_ => Array(6).fill(0)) :
	JSON.parse(localStorage.getItem('ramune314159265.piFromTeacher.seatsData'))
)

export const useSeatsData = () => {
	const [seatsData, setSeatsData] = useAtom(seatsDataAtom)

	useEffect(() => {
		localStorage.setItem('ramune314159265.piFromTeacher.seatsData', JSON.stringify(seatsData))
	}, [seatsData])

	const setSeatValue = ({ x, y, value }) => {
		const data = structuredClone(seatsData)
		data[y][x] = value
		setSeatsData(data)
	}

	return [seatsData, { setSeatsData, setSeatValue }]
}

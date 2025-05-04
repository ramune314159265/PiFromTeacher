import { atom, useAtom } from 'jotai'

export const seatsDataAtom = atom(Array(6).fill(0).map(_ => Array(6).fill(0)))

export const useSeatsData = () => {
	const [seatsData, setSeatsData] = useAtom(seatsDataAtom)

	const setSeatValue = ({ x, y, value }) => {
		const data = structuredClone(seatsData)
		data[y][x] = value
		setSeatsData(data)
	}

	return [seatsData, { setSeatsData, setSeatValue }]
}

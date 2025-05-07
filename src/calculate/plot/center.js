export const centerPlot = (seatData) => {
	const height = seatData.length
	return seatData.reduce((data, line, y) => {
		const width = line.length
		return line.reduce((lineData, value, x) => {
			const startX = x / width
			const startY = y / height
			const spaceWidth = 1 / width
			const spaceheight = 1 / height
			return [
				...lineData,
				...new Array(value).fill(0).map(_ => [
					startX + spaceWidth * 0.5,
					startY + spaceheight * 0.5
				])
			]
		}, data)
	}, [])
}

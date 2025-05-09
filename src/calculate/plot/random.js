export const randomPlot = {
	name: 'ランダムに配置',
	plot(seatData) {
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
						startX + spaceWidth * Math.random(),
						startY + spaceheight * Math.random()
					])
				]
			}, data)
		}, [])
	}
}

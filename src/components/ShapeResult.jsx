import { DataListItem, DataListItemLabel, DataListItemValue, DataListRoot, Flex, Heading } from '@chakra-ui/react'
import { useEffect, useRef } from 'react'
import { useDotPoses } from '../atoms/dotPoses'
import { useSeatsData } from '../atoms/seatsData'

export const ShapeResult = ({ shape }) => {
	const [seatsData] = useSeatsData()
	const [dotPoses, { setDotPoses }] = useDotPoses()
	const dotPosesWithTestPassed = dotPoses.map(e => [...e, shape.test(...e)])
	const dotTestPassed = dotPosesWithTestPassed.filter(e => e[2])

	const canvasRef = useRef(null)
	useEffect(() => {
		if (!canvasRef.current) {
			return
		}
		/** @type {HTMLCanvasElement} */
		const canvas = canvasRef.current

		const size = 300
		canvas.width = size * devicePixelRatio
		canvas.height = size * devicePixelRatio
		canvas.style.width = '300px'
		canvas.style.height = '300px'

		const ctx = canvas.getContext('2d', { alpha: false })
		ctx.scale(devicePixelRatio, devicePixelRatio)

		ctx.fillStyle = 'white'
		ctx.fillRect(0, 0, size, size)

		ctx.fillStyle = 'rgb(255 0 0 / 25%)'
		shape.drawShape(ctx, size)

		ctx.strokeStyle = 'black'
		seatsData.forEach((line, y) => {
			const width = line.length
			const height = seatsData.length
			line.forEach((_, x) => {
				ctx.strokeRect(size / width * x, size / height * y, size / width, size / height)
			})
		})

		dotPosesWithTestPassed.forEach(([x, y, testPassed]) => {
			ctx.fillStyle = testPassed ? 'red' : 'blue'
			ctx.beginPath()
			ctx.arc(x * size, y * size, 5, 0, 2 * Math.PI)
			ctx.closePath()
			ctx.fill()
		})
	}, [dotPosesWithTestPassed, seatsData])

	return (
		<Flex direction="column" w="300px" h="full" gap={4}>
			<Heading size="xl">{shape.name}</Heading>
			<canvas ref={canvasRef}></canvas>
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

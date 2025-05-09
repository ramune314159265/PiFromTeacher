export const fullCircleEdge = {
	name: '円(四つ角中心)',
	test(x, y) {
		const movedX = 0.5 < x ? x - 1 : x
		const movedY = 0.5 < y ? y - 1: y
		return movedX ** 2 + movedY ** 2 <= 0.5 ** 2
	},
	drawShape(ctx, size) {
		ctx.beginPath()
		ctx.arc(0, 0, size / 2, 0, 2 * Math.PI)
		ctx.closePath()
		ctx.fill()
		ctx.beginPath()
		ctx.arc(0, size, size / 2, 0, 2 * Math.PI)
		ctx.closePath()
		ctx.fill()
		ctx.beginPath()
		ctx.arc(size, 0, size / 2, 0, 2 * Math.PI)
		ctx.closePath()
		ctx.fill()
		ctx.beginPath()
		ctx.arc(size, size, size / 2, 0, 2 * Math.PI)
		ctx.closePath()
		ctx.fill()
	},
}

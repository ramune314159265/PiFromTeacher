export const quarterCircleLeftTop = {
	name: '1/4円(左上中心)',
	test(x, y) {
		return x ** 2 + y ** 2 <= 1
	},
	drawShape(ctx, size) {
		ctx.beginPath()
		ctx.arc(0, 0, size, 0, 2 * Math.PI)
		ctx.closePath()
		ctx.fill()
	},
}

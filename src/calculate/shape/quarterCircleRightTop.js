export const quarterCircleRightTop = {
	name: '1/4円(右上中心)',
	test(x, y) {
		return (x - 1) ** 2 + y ** 2 <= 1
	},
	drawShape(ctx, size) {
		ctx.beginPath()
		ctx.arc(size, 0, size, 0, 2 * Math.PI)
		ctx.closePath()
		ctx.fill()
	},
}

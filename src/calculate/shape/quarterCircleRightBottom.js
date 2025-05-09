export const quarterCircleRightBottom = {
	name: '1/4円(右下中心)',
	test(x, y) {
		return (x - 1) ** 2 + (y - 1) ** 2 <= 1
	},
	drawShape(ctx, size) {
		ctx.beginPath()
		ctx.arc(size, size, size, 0, 2 * Math.PI)
		ctx.closePath()
		ctx.fill()
	},
}

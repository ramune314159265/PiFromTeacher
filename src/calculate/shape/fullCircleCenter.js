export const fullCircleCenter = {
	name: '円(真ん中中心)',
	test(x, y) {
		return (x - 0.5) ** 2 + (y - 0.5) ** 2 <= 0.5 ** 2
	},
	drawShape(ctx, size) {
		ctx.beginPath()
		ctx.arc(size / 2, size / 2, size / 2, 0, 2 * Math.PI)
		ctx.closePath()
		ctx.fill()
	},
}

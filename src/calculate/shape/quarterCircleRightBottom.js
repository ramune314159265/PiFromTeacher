export const quarterCircleRightBottom = {
	name: '1/4円(右下中心)',
	test(x, y) {
		return (x - 1) ** 2 + (y - 1) ** 2 <= 1
	}
}

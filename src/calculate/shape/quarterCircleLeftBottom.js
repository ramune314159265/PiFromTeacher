export const quarterCircleLeftBottom = {
	name: '1/4円(左下中心)',
	test(x, y) {
		return x ** 2 + (y - 1) ** 2 <= 1
	}
}

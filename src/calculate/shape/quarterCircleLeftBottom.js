export const quarterCircleLeftBottom = {
	name: '1/4円(左下中心)',
	tester(x, y) {
		return x ** 2 + (y - 1) ** 2 <= 1
	}
}

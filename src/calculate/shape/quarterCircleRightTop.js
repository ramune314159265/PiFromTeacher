export const quarterCircleRightTop = {
	name: '1/4円(右上中心)',
	tester(x, y) {
		return (x - 1) ** 2 + y ** 2 <= 1
	}
}

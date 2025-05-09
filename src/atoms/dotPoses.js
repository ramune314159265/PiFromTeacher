import { atom, useAtom } from 'jotai'

export const dotPosesAtom = atom([])

export const useDotPoses = () => {
	const [dotPoses, setDotPoses] = useAtom(dotPosesAtom)

	return [dotPoses, { setDotPoses }]
}

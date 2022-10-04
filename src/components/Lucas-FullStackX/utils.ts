const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const CHARACTERS = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z'
]

const ESPECIAL_CHARACTERS = [
	'!',
	'@',
	'#',
	'+',
	'=',
	'/',
	'?',
	'.',
	',',
	'<',
	'>',
	'$',
	'%',
	'^',
	'&',
	'*',
	'(',
	')',
	'_'
]

export const generatePassword = (size: number): string => {
	const list = [...CHARACTERS, ...NUMBERS, ...ESPECIAL_CHARACTERS]
	const password = []
	for (let i = 0; i < size; i++) {
		const item = list[Math.floor(Math.random() * list.length)]
		const index = list.indexOf(item)
		password.push(item)
		list.splice(index, 1)
	}
	return password.join('')
}

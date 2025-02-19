import { useRef, useState } from 'react'
import { generatePassword } from './utils'
import './styles.css'
const Form = () => {
	const slider = useRef(null)
	const [value, setValue] = useState(6)
	const [password, setPassword] = useState('TEST')

	const rangeColor = (event) => {
		setValue(event.target.value)
		const min = slider.current.min
		const max = slider.current.max
		const val = slider.current.value
		slider.current.style.backgroundSize = `${((val - min) * 100) / (max - min)}% 100%`
	}
	return (
		<div className='w-10/12 h-fit p-5 bg-zinc-800 flex items-center flex-col md:w-1/2'>
			<h2 className='grass text-xl mb-8'>Password Generator</h2>
			<div className='w-1/2 relative'>
				<div className='absolute w-full flex items-center flex-col'>
					<img className='w-1/3 floating-img mb-8' src='/Lucas-FullStackX/coal.png' alt='image' />
					<div className='top-1/2 w-full bg-white grass-border'>
						<p className='grass text-center text-lg'>{password}</p>
					</div>
				</div>
				<img src='/Lucas-FullStackX/table.png' alt='image' />
			</div>
			<div className='flex mt-3 w-1/2'>
				<input
					onChange={rangeColor}
					ref={slider}
					type='range'
					min='6'
					max='30'
					value={value}
					className='range'
				/>
				<div className='bg-white grass-border-inter'>
					<p className='to-black mr-2 ml-2'>{value}</p>
				</div>
			</div>
			<button
				onClick={() => {
					setPassword(generatePassword(value))
				}}
			>
				TEST
			</button>
		</div>
	)
	/* const MAX = 30
	const [value, setValue] = useState(0)
	console.log((value * 100) / MAX)
	const getBackgroundSize = () => {
		return { backgroundSize: `${(value * 100) / MAX + 10}% 100%` }
	}

	return (
		<div className='App'>
			<h2 className='text-white'>{value}</h2>
			<input
				type='range'
				min='6'
				max={MAX}
				className='range'
				onChange={(e) => setValue(e.target.value)}
				style={getBackgroundSize()}
				value={value}
			/>
		</div>
	) */
}

export default Form

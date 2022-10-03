import { useRef, useState } from 'react'
import './styles.css'
const Form = () => {
	const slider = useRef(null)
	const [value, setValue] = useState(0)

	const rangeColor = (event) => {
		setValue(event.target.value)
		const min = slider.current.min
		const max = slider.current.max
		const val = slider.current.value
		slider.current.style.backgroundSize = `${((val - min) * 100) / (max - min)}% 100%`
	}
	return (
		<div className=' mt-4 p-5 bg-dark-punk'>
			<input
				onChange={rangeColor}
				ref={slider}
				type='range'
				min='6'
				max='30'
				value={value}
				className='range'
			/>
			<h2>{value}</h2>
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

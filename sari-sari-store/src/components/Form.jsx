import { useState } from 'react';

const Form = () => {
	const [inputText, setInputText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(inputText);
	};
	return (
		<form onSubmit={handleSubmit}>
			<h4>sari-sari store</h4>
			<div className='form-control'>
				<input
					type='text'
					className='form-input'
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
				<button type='submit' className='btn'>
					add
				</button>
			</div>
		</form>
	);
};
export default Form;

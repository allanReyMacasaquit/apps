import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ addItem }) => {
	const [inputText, setInputText] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputText) return;
		addItem(inputText);
		setInputText('');
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

Form.propTypes = {
	addItem: PropTypes.func.isRequired,
};

export default Form;

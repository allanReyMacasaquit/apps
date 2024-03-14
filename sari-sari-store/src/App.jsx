import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { nanoid } from 'nanoid';
function App() {
	const [items, setItems] = useState([]);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			completed: false,
			id: nanoid(),
		};
		setItems([...items, newItem]);
	};

	return (
		<section className='section-center'>
			<Form addItem={addItem} />
		</section>
	);
}

export default App;

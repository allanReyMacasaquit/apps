import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';

const setLocalStorage = (items) => {
	localStorage.setItem('list', JSON.stringify(items));
};

function App() {
	const [items, setItems] = useState([]);

	const addItem = (itemName) => {
		const newItem = {
			name: itemName,
			completed: false,
			id: nanoid(),
		};
		const newItems = [...items, newItem];
		setItems(newItems);
		setLocalStorage(newItems);
	};

	const removeItem = (itemId) => {
		const newItem = items.filter((item) => item.id !== itemId);
		setItems(newItem);
		setLocalStorage(newItem);
	};

	return (
		<section className='section-center'>
			<Form addItem={addItem} />
			<Items items={items} removeItem={removeItem} />
		</section>
	);
}

export default App;

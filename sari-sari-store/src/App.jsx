import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import { nanoid } from 'nanoid';
import Items from './components/Items';

const getLocalStorage = () => {
	let list = localStorage.getItem('list');

	if (list) {
		list = JSON.parse(localStorage.getItem('list'));
	} else {
		list = [];
	}
	return list;
};

const setLocalStorage = (items) => {
	localStorage.setItem('list', JSON.stringify(items));
};

function App() {
	const [items, setItems] = useState(getLocalStorage());

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

	const editItem = (itemId) => {
		const newItems = items.map((item) => {
			if (item.id === itemId) {
				const newItem = { ...item, completed: !item.completed };
				return newItem;
			}
			return item;
		});
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
			<Items items={items} removeItem={removeItem} editItem={editItem} />
		</section>
	);
}

export default App;

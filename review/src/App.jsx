import { useState } from 'react';
import './App.css';
import reviews from './data';

function App() {
	const [index, setIndex] = useState(0);
	const { name, image, job, text } = reviews[index];
	console.log(name);
	return (
		<>
			<main>
				<h2>Review</h2>
			</main>
		</>
	);
}

export default App;

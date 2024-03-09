import { useState } from 'react';
import './App.css';
import data from './data.js';

function App() {
	const [people, setPeople] = useState(data);
	console.log(people);
	return (
		<main>
			<section className='container'>
				<h1 className='title'>{people.length} Birthday Reminders</h1>
				{people.map(({ id, name, age, image }) => (
					<div key={id}>
						<article className='person'>
							<img src={image} alt='name' className='img' />
							<div>
								<h4>{name}</h4>
								<p>{age} years</p>
							</div>
						</article>
					</div>
				))}
			</section>
		</main>
	);
}

export default App;

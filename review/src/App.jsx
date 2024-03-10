import { useState } from 'react';
import './App.css';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function App() {
	const [index, setIndex] = useState(0);
	const { name, image, job, text } = reviews[index];

	const nextPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex + 1;
			return newIndex;
		});
	};

	const prevPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex + 1;
			return newIndex;
		});
	};
	return (
		<main>
			<article className='review'>
				<div className='img-container'>
					<img className='person-img' src={image} alt={name} />
					<span className='quote-icon'>
						<FaQuoteRight />
					</span>
				</div>
				<h4 className='author'>{name}</h4>
				<p className='job'>{job}</p>
				<p className='info'>{text}</p>
				<div className='btn-container'>
					<button className='prev-btn' onClick={prevPerson}>
						<FaChevronLeft />
					</button>
					<button className='next-btn' onClick={nextPerson}>
						<FaChevronRight />
					</button>
				</div>
			</article>
		</main>
	);
}

export default App;

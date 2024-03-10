import { useState } from 'react';
import './App.css';
import reviews from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function App() {
	const [index, setIndex] = useState(0);
	const { name, image, job, text } = reviews[index];

	const checkNumber = (number) => {
		const lastReview = reviews.length - 1;

		if (number > lastReview) return 0;
		if (number < 0) return lastReview;
		return number;
	};

	const nextPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex + 1;
			return checkNumber(newIndex);
		});
	};

	const prevPerson = () => {
		setIndex((currentIndex) => {
			const newIndex = currentIndex - 1;
			return checkNumber(newIndex);
		});
	};

	const randomReview = () => {
		let randomNumber = Math.floor(Math.random() * reviews.length);
		if (randomNumber === index) {
			randomNumber = index + 1;
		}
		setIndex(checkNumber(randomNumber));
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
				<button className='btn btn-hipster' onClick={randomReview}>
					next
				</button>
			</article>
		</main>
	);
}

export default App;

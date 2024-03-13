import { useEffect, useState, useCallback, useRef } from 'react';
import { longList } from '../data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Carousel = () => {
	const [people, setPeople] = useState(longList);
	const [currentPerson, setCurrentPerson] = useState(0);
	const sliderIdRef = useRef(null);

	const prevSlide = useCallback(() => {
		setCurrentPerson(
			(oldPerson) => (oldPerson - 1 + people.length) % people.length
		);
	}, [people.length]);

	const nextSlideCallback = useCallback(() => {
		setCurrentPerson((oldPerson) => (oldPerson + 1) % people.length);
	}, [people.length]);

	const handleMouseEnter = () => {
		clearInterval(sliderIdRef.current);
		sliderIdRef.current = null;
		// console.log('Mouse entered. sliderIdRef:', sliderIdRef.current);
	};

	const handleMouseLeave = () => {
		if (!sliderIdRef.current) {
			startInterval();
			// console.log('Mouse left. sliderIdRef:', sliderIdRef.current);
		}
	};

	const startInterval = useCallback(() => {
		if (!sliderIdRef.current) {
			sliderIdRef.current = setInterval(() => {
				// console.log('Interval callback. sliderIdRef:', sliderIdRef.current);
				nextSlideCallback();
			}, 5000);
		}
	}, [nextSlideCallback]);

	useEffect(() => {
		startInterval();
		return () => {
			clearInterval(sliderIdRef.current);
			// console.log('Interval cleared. sliderIdRef:', sliderIdRef.current);
		};
	}, [startInterval]);

	return (
		<section
			className='slider-container'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			{people.map((person, personIndex) => {
				const { id, image, name, title, quote } = person;
				return (
					<article
						className='slide'
						style={{
							transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
							opacity: personIndex === currentPerson ? 1 : 0,
							visibility: personIndex === currentPerson ? 'visible' : 'hidden',
						}}
						key={id}
					>
						<img src={image} alt={name} className='person-img' />
						<h5 className='name'>{name}</h5>
						<p className='title'>{title}</p>
						<p className='text'>{quote}</p>
						<FaQuoteRight className='icon' />
					</article>
				);
			})}
			{people.length > 1 && (
				<>
					<button type='button' className='prev' onClick={prevSlide}>
						<FiChevronLeft />
					</button>
					<button type='button' className='next' onClick={nextSlideCallback}>
						<FiChevronRight />
					</button>
				</>
			)}
		</section>
	);
};

export default Carousel;

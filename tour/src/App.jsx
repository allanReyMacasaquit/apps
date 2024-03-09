import { useEffect, useState, useRef } from 'react';
import './App.css';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);
	const [readMore, setReadMore] = useState({});

	const tourRef = useRef(null);

	const deleteTour = (id) => {
		const newTourList = tours.filter((tour) => tour.id !== id);
		setTours(newTourList);
	};

	const toggleReadMore = (id) => {
		setReadMore((prev) => {
			const updatedTour = { ...prev };

			Object.keys(updatedTour).forEach((tourId) => {
				if (tourId !== id) {
					updatedTour[tourId] = false;
				}
			});

			updatedTour[id] = !prev[id];

			return updatedTour;
		});
	};

	const handleOutsideClick = (e) => {
		if (tourRef.current && !tourRef.current.contains(e.target)) {
			setReadMore({});
		}
	};

	const fetchTours = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const tours = await response.json();
			setLoading(false);
			setTours(tours);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
		document.addEventListener('click', handleOutsideClick);
		return () => {
			document.removeEventListener('click', handleOutsideClick);
		};
	}, []);

	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}
	if (tours.length === 0) {
		return (
			<section>
				<div className='title'>
					<h2>no tours left</h2>
					<button className='btn' onClick={() => fetchTours()}>
						refresh
					</button>
				</div>
			</section>
		);
	}

	return (
		<section>
			<div className='title'>
				<h2>Lists of Available Tours</h2>
				<div className='title-underline'></div>
			</div>
			<div className='tours' ref={tourRef}>
				{tours.map(({ id, image, price, info, name }) => (
					<article className='single-tour' key={id}>
						<img src={image} alt={name} className='img' />
						<span className='tour-price'>${price}</span>
						<div className='tour-info'>
							<h5>{name}</h5>
							<p>
								{readMore[id] ? info : `${info.substring(0, 100)}...`}
								<button className='info-btn' onClick={() => toggleReadMore(id)}>
									{readMore[id] ? 'show less' : 'read more'}
								</button>
							</p>
							<button
								className='btn btn-block delete-btn'
								onClick={() => deleteTour(id)}
							>
								Delete Tour
							</button>
						</div>
					</article>
				))}
			</div>
		</section>
	);
}

export default App;

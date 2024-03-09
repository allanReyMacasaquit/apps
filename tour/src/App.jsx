import { useEffect, useState } from 'react';
import './App.css';
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [tours, setTours] = useState([]);
	const [loading, setLoading] = useState(true);

	const deleteTour = (id) => {
		const newTour = tours.filter((tour) => tour.id !== id);
		setTours(newTour);
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
	}, []);
	if (loading) {
		return (
			<main>
				<Loading />
			</main>
		);
	}

	return (
		<section>
			<div className='title'>
				<h2>Lists of Available Tours</h2>
				<div className='title-underline'></div>
			</div>
			<div className='tours'>
				{tours.map(({ id, image, price, info, name }) => (
					<article className='single-tour' key={id}>
						<img src={image} alt={name} className='img' />
						<span className='tour-price'>${price}</span>
						<div className='tour-info'>
							<h5>{name}</h5>
							<p>{info}</p>
						</div>
						<button className='btn btn-block' onClick={() => deleteTour(id)}>
							Delete Tour
						</button>
					</article>
				))}
			</div>
		</section>
	);
}

export default App;

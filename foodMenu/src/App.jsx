import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import menus from './data';

const uniqueCategories = [
	'all',
	...new Set(menus.map((item) => item.category)),
];

function App() {
	const [selectedCategory, setSelectedCategory] = useState('all');

	const filteredMenus =
		selectedCategory === 'all'
			? menus
			: menus.filter((item) => item.category === selectedCategory);

	const onClickCategory = (category) => {
		setSelectedCategory(category);
	};

	return (
		<main>
			<section className='menu'>
				<Title title='our menu' />

				<div className='btn-container'>
					{uniqueCategories.map((category) => (
						<button
							key={category}
							className={`btn ${category === selectedCategory ? 'active' : ''}`}
							onClick={() => onClickCategory(category)}
						>
							{category}
						</button>
					))}
				</div>

				<div className='section-center'>
					{filteredMenus.map(({ id, title, img, price, desc }) => (
						<article key={id}>
							<img src={img} alt={title} className='img' />
							<div className='item-info'>
								<header>
									<h5>{title}</h5>
									<span className='item-price'>${price}</span>
								</header>
								<p className='item-text'>{desc}</p>
							</div>
						</article>
					))}
				</div>
			</section>
		</main>
	);
}

export default App;

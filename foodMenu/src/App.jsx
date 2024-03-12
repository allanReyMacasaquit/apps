import './App.css';
import Title from './components/Title';
import menus from './data';

function App() {
	return (
		<main>
			<section className='menu'>
				<Title title='our menu' />
				<div className='section-center'>
					{menus.map(({ id, title, img, price, desc }) => (
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

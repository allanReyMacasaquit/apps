import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { links } from '../data';
import { useState } from 'react';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);

	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} className='logo' alt='logo' />
					<button className='nav-toggle' onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				{showLinks && (
					<div className='links-container'>
						<ul className='links'>
							{links.map(({ id, url, text }) => (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};
export default Navbar;

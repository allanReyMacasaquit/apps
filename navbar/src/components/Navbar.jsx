import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { links } from '../data';
import { useRef, useState } from 'react';

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);

	const toggleLinks = () => {
		console.log(linksRef.current.getBoundingClientRect());
		setShowLinks(!showLinks);
	};
	return (
		<nav>
			<div className='nav-center'>
				<div className='nav-header'>
					<img src={logo} className='logo' alt='logo' />
					<button
						className='nav-toggle'
						onClick={toggleLinks} // Set isHovered to false on mouse leave
					>
						{showLinks ? <FaTimes /> : <FaBars />}
					</button>
				</div>

				<div
					className='links-container'
					ref={linksContainerRef}
					style={{
						height: showLinks
							? `${linksRef.current.getBoundingClientRect().height}px`
							: '0px',
					}}
				>
					<ul className='links' ref={linksRef}>
						{links.map(({ id, url, text }) => (
							<li key={id}>
								<a href={url}>{text}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;

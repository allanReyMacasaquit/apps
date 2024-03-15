import {
	FaBars,
	FaFacebook,
	FaInstagram,
	FaLinkedin,
	FaTimes,
	FaTwitter,
} from 'react-icons/fa';
import logo from '../assets/logo.svg';
import { links, social } from '../data';
import { useRef, useState } from 'react';

const getIconComponent = (iconName) => {
	switch (iconName) {
		case 'FaTwitter':
			return <FaTwitter />;
		case 'FaFacebook':
			return <FaFacebook />;
		case 'FaInstagram':
			return <FaInstagram />;
		case 'FaLinkedin':
			return <FaLinkedin />;
		default:
			return null;
	}
};

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
				<ul className='social-icons'>
					{social.map(({ id, url, icon }) => (
						<li key={id}>
							<a href={url}>{getIconComponent(icon)}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
};
export default Navbar;

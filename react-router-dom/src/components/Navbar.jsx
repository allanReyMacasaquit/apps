import { NavLink } from 'react-router-dom';
import Wrapper from '../wrappers/Navbar';

const links = [
	{ id: 1, text: 'Home', url: '/' },
	{ id: 2, text: 'About', url: '/about' },
	{ id: 3, text: 'Newsletter', url: '/newsletter' },
];

const Navbar = () => {
	return (
		<Wrapper>
			<div className='nav-center'>
				<span className='logo'>
					Mix
					<span style={{ color: 'purple' }}> Master</span>
				</span>
				<div className='nav-links'>
					{links.map(({ id, text, url }) => (
						<NavLink key={id} to={url} className='nav-link'>
							{text}
						</NavLink>
					))}
				</div>
			</div>
		</Wrapper>
	);
};
export default Navbar;

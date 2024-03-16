import { useGlobalContext } from '../context/utils';
import { links, social } from '../data';
import logo from '../assets/logo.svg';

import {
	FaBehance,
	FaFacebook,
	FaLinkedin,
	FaTwitter,
	FaSketch,
	FaHome,
	FaUserFriends,
	FaFolderOpen,
	FaCalendarAlt,
	FaWpforms,
	FaTimes,
} from 'react-icons/fa';

const getIconComponent = (iconName) => {
	switch (iconName) {
		case 'FaTwitter':
			return <FaTwitter />;
		case 'FaFacebook':
			return <FaFacebook />;
		case 'FaBehance':
			return <FaBehance />;
		case 'FaLinkedin':
			return <FaLinkedin />;
		case 'FaSketch':
			return <FaSketch />;
		case 'FaHome':
			return <FaHome />;
		case 'FaUserFriends':
			return <FaUserFriends />;
		case 'FaFolderOpen':
			return <FaFolderOpen />;
		case 'FaCalendarAlt':
			return <FaCalendarAlt />;
		case 'FaWpforms':
			return <FaWpforms />;
		default:
			return null;
	}
};

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();

	return (
		<aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
			<div className='sidebar-header'>
				<img src={logo} alt='coding addict' className='logo' />
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
			</div>
			<ul className='links'>
				{links.map((link) => {
					const { id, url, text, icon } = link;
					return (
						<li key={id}>
							<a href={url}>
								{getIconComponent(icon)}
								{text}
							</a>
						</li>
					);
				})}
			</ul>
			<ul className='social-links'>
				{social.map((link) => {
					const { id, url, icon } = link;
					return (
						<li key={id}>
							<a href={url}>{getIconComponent(icon)}</a>
						</li>
					);
				})}
			</ul>
		</aside>
	);
};
export default Sidebar;

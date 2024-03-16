import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context/appProvider';
import sublinks from '../data';
import {
	Fa500Px,
	FaAccusoft,
	FaAdversal,
	FaAvianex,
	FaBitcoin,
	FaBtc,
	FaCodiepie,
	FaDocker,
	FaGithubSquare,
} from 'react-icons/fa';

const getIconComponent = (iconName) => {
	switch (iconName) {
		case 'Fa500Px':
			return <Fa500Px />;
		case 'FaAccusoft':
			return <FaAccusoft />;
		case 'FaAdversal':
			return <FaAdversal />;
		case 'FaAvianex':
			return <FaAvianex />;
		case 'FaBitcoin':
			return <FaBitcoin />;
		case 'FaBtc':
			return <FaBtc />;
		case 'FaCodiepie':
			return <FaCodiepie />;
		case 'FaDocker':
			return <FaDocker />;
		case 'FaGithubSquare':
			return <FaGithubSquare />;

		default:
			return null;
	}
};

const Sidebar = () => {
	const { isSidebarOpen, closeSidebar } = useGlobalContext();
	return (
		<aside className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
			<div className='sidebar-container'>
				<button className='close-btn' onClick={closeSidebar}>
					<FaTimes />
				</button>
				<div className='sidebar-links'>
					{sublinks.map((item) => {
						const { links, page, pageId } = item;
						return (
							<article key={pageId}>
								<h4>{page}</h4>
								<div className='sidebar-sublinks'>
									{links.map((link) => {
										const { url, icon, label, id } = link;
										return (
											<a key={id} href={url}>
												{getIconComponent(icon)}
												{label}
											</a>
										);
									})}
								</div>
							</article>
						);
					})}
				</div>
			</div>
		</aside>
	);
};
export default Sidebar;

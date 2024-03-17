import { useRef } from 'react';
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

const Submenu = () => {
	const { pageId, setPageId } = useGlobalContext();
	const currentPage = sublinks.find((item) => item.pageId === pageId);

	const submenuContainer = useRef(null);

	const handleMouseLeave = (event) => {
		const submenu = submenuContainer.current;
		const { left, right, bottom } = submenu.getBoundingClientRect();
		const { clientX, clientY } = event;

		if (clientX < left + 1 || clientX > right - 1 || clientY > bottom - 1) {
			setPageId(null);
		}
	};

	return (
		<div
			className={currentPage ? 'submenu show-submenu' : 'submenu'}
			onMouseLeave={handleMouseLeave}
			ref={submenuContainer}
		>
			<h5>{currentPage?.page}</h5>

			<div
				className='submenu-links'
				style={{
					gridTemplateColumns:
						currentPage?.links?.length > 1 ? '1fr 1fr 1fr 1fr' : '1fr',
				}}
			>
				{currentPage?.links?.map((link) => {
					const { id, url, label, icon } = link;
					return (
						<a key={id} href={url}>
							{getIconComponent(icon)}
							{label}
						</a>
					);
				})}
			</div>
		</div>
	);
};
export default Submenu;

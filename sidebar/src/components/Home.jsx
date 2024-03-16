import { useGlobalContext } from '../context/utils';
import { FaBars } from 'react-icons/fa';
const Home = () => {
	const { openSidebar, openModal } = useGlobalContext();

	return (
		<main>
			<button className='sidebar-toggle'>
				<FaBars />
			</button>
			<button className='btn' onClick={openModal}>
				show modal
			</button>
		</main>
	);
};
export default Home;

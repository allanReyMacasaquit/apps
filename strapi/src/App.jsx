import { useGlobalContext } from './components/context/appProvider';

function App() {
	const { isSidebarOpen } = useGlobalContext();
	console.log(isSidebarOpen);
	return <main>Strapi</main>;
}

export default App;

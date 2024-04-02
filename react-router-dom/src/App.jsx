import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import {
	About,
	Cocktail,
	Error,
	HomeLayout,
	Landing,
	NewsLetter,
} from './Pages';
import { loader as LandingLoader } from './Pages/Landing';
import { loader as SingleCocktailLoader } from './Pages/Cocktail';
import SinglePageError from './Pages/SinglePageError';
import { action as newsLetterAction } from './Pages/NewsLetter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 1000 * 60 * 5,
		},
	},
});

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				errorElement: <SinglePageError />,
				loader: LandingLoader(queryClient),
			},
			{
				path: '/cocktail/:id',
				element: <Cocktail />,
				errorElement: <SinglePageError />,
				loader: SingleCocktailLoader(queryClient),
			},
			{
				path: '/newsletter',
				element: <NewsLetter />,
				action: newsLetterAction,
			},
			{
				path: '/error',
				element: <Error />,
			},
			{
				path: '/about',
				element: <About />,
			},
		],
	},
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router}></RouterProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
}

export default App;

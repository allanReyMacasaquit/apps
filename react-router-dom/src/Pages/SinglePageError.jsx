import { useRouteError } from 'react-router-dom';
import Wrapper from '../wrappers/ErrorPage';
const SinglePageError = () => {
	const error = useRouteError();
	return (
		<Wrapper>
			<div className='error-message'>
				<h3 style={{ marginBottom: '2rem' }}>This page has an Error...</h3>
				<span>{error.message}</span>
			</div>
		</Wrapper>
	);
};
export default SinglePageError;

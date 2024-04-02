import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../wrappers/ErrorPage';
import img from '../assets/not-found.svg';

const Error = () => {
	const error = useRouteError();
	console.log(error);

	if (error.status === 404) {
		return (
			<Wrapper>
				<div>
					<img src={img} alt='not found' />
					<Link to='/'>
						<span className='error'>oopps!!! Something went wrong</span>
						<h3 style={{ marginTop: '2rem' }}>back to Home</h3>
					</Link>
				</div>
			</Wrapper>
		);
	}
	return (
		<Wrapper>
			<h3>Something went wrong</h3>;
		</Wrapper>
	);
};
export default Error;

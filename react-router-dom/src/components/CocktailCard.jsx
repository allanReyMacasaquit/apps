import { Link } from 'react-router-dom';
import Wrapper from '../wrappers/CocktailCard';

const CocktailCard = ({ id, name, image, info, glass }) => {
	return (
		<Wrapper>
			<Link to={`/cocktail/${id}`}>
				<div className='image-container'>
					<img src={image} alt='name' className='img' />
				</div>
				<div className='footer'>
					<h4>{name}</h4>
					<h5>{glass}</h5>
					<p>{info}</p>
				</div>
			</Link>
		</Wrapper>
	);
};
export default CocktailCard;

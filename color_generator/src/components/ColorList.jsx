import PropTypes from 'prop-types';
import { nanoid } from 'nanoid'; // Assuming you're using nanoid for generating unique keys
import SingleColor from './SingleColor'; // Assuming SingleColor is another component

const ColorList = ({ colors }) => {
	return (
		<section className='colors'>
			{colors.map((color, index) => {
				return <SingleColor key={nanoid()} color={color} index={index} />;
			})}
		</section>
	);
};

ColorList.propTypes = {
	colors: PropTypes.array.isRequired,
};

export default ColorList;

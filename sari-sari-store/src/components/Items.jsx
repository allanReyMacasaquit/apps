import PropTypes from 'prop-types';
import SingleItem from './SingleItem';

const Items = ({ items, removeItem }) => {
	return (
		<div className='items'>
			{items.map((item) => {
				return <SingleItem key={item.id} item={item} removeItem={removeItem} />;
			})}
		</div>
	);
};

Items.propTypes = {
	items: PropTypes.array.isRequired,
	removeItem: PropTypes.func.isRequired,
};

export default Items;

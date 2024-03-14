import PropTypes from 'prop-types';

const SingleItem = ({ item, removeItem, editItem }) => {
	return (
		<div className='single-item'>
			<input
				type='checkbox'
				checked={item.completed}
				onChange={() => editItem(item.id)}
			/>
			<p
				style={{
					textTransform: 'capitalize',
					textDecoration: item.completed && 'line-through',
				}}
			>
				{item.name}
			</p>
			<button
				className='btn remove-btn'
				type='button'
				onClick={() => removeItem(item.id)}
			>
				delete
			</button>
		</div>
	);
};

SingleItem.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string.isRequired,
		name: PropTypes.string.isRequired,
		completed: PropTypes.bool.isRequired,
	}).isRequired,
	removeItem: PropTypes.func.isRequired,
	editItem: PropTypes.func.isRequired,
};
export default SingleItem;

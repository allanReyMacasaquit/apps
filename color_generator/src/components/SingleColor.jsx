import PropTypes from 'prop-types';
import { toast } from 'react-toastify';

const SingleColor = ({ index, color }) => {
	const { hex, weight, rgb } = color; // Include 'rgb' property in destructuring

	const saveToClipboard = async () => {
		if (navigator.clipboard) {
			try {
				await navigator.clipboard.writeText(`#${hex}`);
				toast.success('Color copied to clipboard');
			} catch (error) {
				toast.error('Failed to copy color to clipboard');
			}
		} else {
			toast.error('Clipboard access not available');
		}
	};

	return (
		<article
			className={index > 10 ? 'color color-light' : 'color'}
			style={{ background: `#${hex}` }}
			onClick={saveToClipboard}
		>
			<p className='color-value'>hex - #{hex}</p>
			<p className='color-value'>rgb - ({rgb.join(', ')})</p>
			<p className='percent-value'>weight - {weight}%</p>
		</article>
	);
};

SingleColor.propTypes = {
	index: PropTypes.number.isRequired,
	color: PropTypes.shape({
		hex: PropTypes.string.isRequired,
		weight: PropTypes.number.isRequired,
		rgb: PropTypes.arrayOf(PropTypes.number).isRequired,
	}).isRequired,
};

export default SingleColor;

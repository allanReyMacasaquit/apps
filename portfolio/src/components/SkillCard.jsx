import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
const getIconComponent = (iconName) => {
	switch (iconName) {
		case 'FaHtml5':
			return <FaHtml5 />;
		case 'FaJs':
			return <FaJs />;
		case 'FaReact':
			return <FaReact />;
		default:
			return null;
	}
};

const SkillCard = ({ icon, title, text }) => {
	return (
		<article>
			<div className='flex'>
				<span className='icon-size'>{getIconComponent(icon)}</span>
				<h4 className='font-bold'>{title}</h4>
			</div>

			<p className='mt-2 text-slate-500'>{text}</p>
		</article>
	);
};
export default SkillCard;

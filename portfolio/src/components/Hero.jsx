import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';

const socialIcons = [
	{ id: 1, href: '/', icon: <FaGithubSquare /> },
	{ id: 2, href: '/', icon: <FaLinkedin /> },
	{ id: 3, href: '/', icon: <FaTwitterSquare /> },
];

const Hero = () => {
	return (
		<div
			className='bg-gradient-to-b from-emerald-100 to-emerald-300 py-32 h-[100vh]'
			id='home'
		>
			<div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
				<article>
					<h1 className='text-5xl sm:text-7xl font-bold tracking-wider'>
						I&apos;m Allan
					</h1>
					<p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
						Front-End Developer
					</p>
					<p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
						turning ideas into interactive reality
					</p>
					<div className='flex gap-x-4 mt-4'>
						{socialIcons.map(({ id, href, icon }) => (
							<a href={href} key={id}>
								<span className='icon-size'>{icon}</span>
							</a>
						))}
					</div>
				</article>
				<article className='hidden md:block'>
					<img src={heroImg} className='h-80 lg:h-96' />
				</article>
			</div>
		</div>
	);
};
export default Hero;

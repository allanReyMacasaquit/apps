import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://course-api.com/react-tabs-project';

function App() {
	const [job, setJob] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchJobs = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const jobs = await response.json();
			const firstJob = jobs[0];
			setJob(firstJob);
			setLoading(false);
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	if (loading) {
		return (
			<section className='job-center'>
				<div className='loading'></div>
			</section>
		);
	}

	if (!job) {
		return (
			<section className='job-center'>
				<h3>No jobs available</h3>
			</section>
		);
	}

	const { title, dates, company, duties } = job;
	console.log('Generated UUID:', uuidv4());
	return (
		<section className='container'>
			<article className='job-center'>
				<h3>{title}</h3>
				<span className='job-company'>{company}</span>
				<p className='job-date'>{dates}</p>
				<div>
					{duties.map((duty) => (
						<div key={uuidv4()} className='job-desc'>
							<FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
							<p>{duty}</p>
						</div>
					))}
				</div>
			</article>
		</section>
	);
}

export default App;

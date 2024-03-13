import { useEffect, useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import './App.css';
import { v4 as uuidv4 } from 'uuid';

// API URL for fetching job data
const url = 'https://course-api.com/react-tabs-project';

// Main component
function App() {
	// State to store job data
	const [jobs, setJobs] = useState([]);

	// State to track loading status
	const [loading, setLoading] = useState(true);

	// State to store the ID of the currently active job
	const [activeJob, setActiveJob] = useState(null);

	// Function to fetch job data from the API
	const fetchJobs = async () => {
		setLoading(true);
		try {
			const response = await fetch(url);
			const jobsData = await response.json();
			// Set the retrieved job data
			setJobs(jobsData);
			// Set loading to false once data is fetched
			setLoading(false);
			// Set the first job as active initially
			setActiveJob(jobsData[0]?.id || null);
		} catch (error) {
			// Handle errors and log to the console
			setLoading(false);
			console.log(error);
		}
	};

	// Effect hook to fetch job data when the component mounts
	useEffect(() => {
		fetchJobs();
	}, []);

	// Function to toggle the active job based on the button click
	const toggleCompany = (id) => {
		setActiveJob(id);
	};

	// Loading state check: display loading spinner
	if (loading) {
		return (
			<section className='job-center'>
				<div className='loading'></div>
			</section>
		);
	}

	// No jobs available check: display a message
	if (jobs.length === 0) {
		return (
			<section className='job-center'>
				<h3>No jobs available</h3>
			</section>
		);
	}

	// Find details of the currently active job
	const activeJobDetails = jobs.find((job) => job.id === activeJob);

	// Render the component
	return (
		<>
			{/* Buttons to toggle between companies */}
			<div className='btn-container'>
				{jobs.map((job) => (
					<button
						key={job.id}
						onClick={() => toggleCompany(job.id)}
						className={` ${
							activeJob === job.id ? 'active active-btn job-btn' : 'job-btn'
						}`}
					>
						{job.company}
					</button>
				))}
			</div>

			{/* Section to display job details */}
			<section className='container'>
				{activeJobDetails && (
					<article className='jobs-center'>
						<h3>{activeJobDetails.title}</h3>
						<span className='job-company'>{activeJobDetails.company}</span>
						<p className='job-date'>{activeJobDetails.dates}</p>
						<div>
							{activeJobDetails.duties.map((duty) => (
								<div key={uuidv4()} className='job-desc'>
									<FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
									<p>{duty}</p>
								</div>
							))}
						</div>
					</article>
				)}
			</section>
		</>
	);
}

// Export the component as the default export
export default App;

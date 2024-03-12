import { useState } from 'react';
import './App.css';
import questions from './data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function App() {
	const [question, setQuestion] = useState(
		questions.map((question) => ({ ...question, showInfo: false }))
	);

	// -show only each info-
	const toggleInfo = (id) => {
		setQuestion((prevQuestions) =>
			prevQuestions.map((question) => ({
				...question,
				showInfo: question.id === id && !question.showInfo,
			}))
		);
	};

	// -start show all info when toggle-

	// const toggleInfo = (id) => {
	// 	setQuestionState((prevQuestions) =>
	// 		prevQuestions.map((question) =>
	// 			question.id === id
	// 				? { ...question, showInfo: !question.showInfo }
	// 				: question
	// 		)
	// 	);
	// };

	// -end show all info when toggle-

	return (
		<section className='container'>
			<h1>Questions</h1>
			{question.map(({ id, title, info, showInfo }) => (
				<article className='question' key={id}>
					<header>
						<h5>{title}</h5>
						<button className='question-btn' onClick={() => toggleInfo(id)}>
							{showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
						</button>
					</header>
					{showInfo && <p>{info}</p>}
				</article>
			))}
		</section>
	);
}

export default App;

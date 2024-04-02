import axios from 'axios';
import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
	const formData = await request.formData();
	const data = Object.fromEntries(formData);

	try {
		const response = await axios.post(newsletterUrl, data);
		toast.success(response.data.msg);
		return redirect('/');
	} catch (error) {
		toast.error(error?.response?.data?.msg);
		return error;
	}
};

const NewsLetter = () => {
	const navigation = useNavigation();
	const isSubmitting = navigation.state === 'submitting';
	return (
		<Form className='form' method='POST'>
			<h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>
				our newsletter
			</h3>
			<div className='form-row'>
				{/* name */}
				<label htmlFor='name' className='form-label'>
					name
				</label>
				<input
					type='text'
					className='form-input'
					name='name'
					id='name'
					required
					defaultValue='john'
				/>
				{/* lastName */}
				<label htmlFor='lastName' className='form-label'>
					last name
				</label>
				<input
					type='text'
					className='form-input'
					name='lastName'
					id='lastName'
					required
					defaultValue='doe'
				/>
				{/* email */}
				<label htmlFor='lastName' className='form-label'>
					email
				</label>
				<input
					type='email'
					className='form-input'
					name='email'
					id='email'
					required
					defaultValue='test@test.com'
				/>
				<button type='submit' className='btn' disabled={isSubmitting}>
					{isSubmitting ? 'submitting...' : 'submit'}
				</button>
			</div>
		</Form>
	);
};
export default NewsLetter;

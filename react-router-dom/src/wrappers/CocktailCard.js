import styled from 'styled-components';
const Wrapper = styled.article`
	background: var(--white);
	box-shadow: var(--shadow-2);
	transition: var(--transition);
	display: grid;
	grid-template-rows: auto 1fr;
	border-radius: var(--borderRadius);

	.image-container {
		overflow: hidden;
	}
	img {
		height: 15rem;
		border-top-left-radius: var(--borderRadius);
		border-top-right-radius: var(--borderRadius);
		object-fit: cover;
	}
	img:hover {
		transform: scale(1.03); /* Changed from "scale" to "transform: scale()" */
		transition: transform 0.3s cubic-bezier(0.05, 0.175, 0.15, 0.19); /* Updated transition property */
	}

	.footer {
		padding: 1.5rem;
		h4,
		h5,
		p {
			margin-bottom: 0.5rem;
			text-align: center;
		}
		h4 {
			font-weight: 700;
		}
		p {
			margin-bottom: 1rem;
			color: var(--grey-500);
		}
	}
`;

export default Wrapper;

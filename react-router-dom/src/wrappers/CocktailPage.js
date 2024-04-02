import styled from 'styled-components';

const Wrapper = styled.div`
	header {
		text-align: center;
		margin-bottom: 3rem;
		.btn {
			margin-bottom: 1rem;
		}
	}
	.img {
		box-shadow: var(--shadow-2);
		margin-bottom: 1rem;
		border-radius: 20px;
	}
	.drink-info {
		background-color: var(--primary-100);
		border-radius: 20px;
		margin: 4px 0;
		text-decoration: underline;
		text-underline-offset: 5px;
	}
	.drink p {
		padding-bottom: 10px;
		font-weight: 700;
		text-transform: capitalize;
		line-height: 2;
		margin: 1rem;
	}
	.drink-data {
		margin-right: 0.5rem;
		border-radius: var(--borderRadius);
		color: var(--primary-700);
		letter-spacing: var(--letterSpacing);
	}
	.ing {
		display: inline-block;
		margin-right: 0.5rem;
	}
	@media (min-width: 992px) {
		.drink {
			display: grid;
			grid-template-columns: 2fr 3fr;
			gap: 3rem;
			align-items: center;
		}
		.drink-info {
		}
	}
`;

export default Wrapper;

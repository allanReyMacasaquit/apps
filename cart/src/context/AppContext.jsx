import { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from './reducer/reducer.jsx';
import cartItems from '../data.js';
import { CLEAR_CART, DECREASE, INCREASE, REMOVE } from './action/action.jsx';
import { getTotals } from '../utils.js';

const url = 'https://www.course-api.com/react-useReducer-cart-project';
const AppContext = createContext();

const cart = new Map(cartItems.map((item) => [item.id, item]));

const initialState = {
	loading: true,
	cart: cart,
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const { totalAmount, totalCost } = getTotals(state.cart);

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};
	const remove = (id) => {
		dispatch({ type: REMOVE, payload: { id } });
	};

	const increase = (id) => {
		dispatch({ type: INCREASE, payload: { id } });
	};
	const decrease = (id) => {
		dispatch({ type: DECREASE, payload: { id } });
	};
	const fetchData = async () => {
		const response = await fetch(url);
		const cart = await response.json();
		console.log(cart);
	};
	useEffect(() => {
		fetchData();
	}, []);

	return (
		<AppContext.Provider
			value={{
				...state,
				clearCart,
				remove,
				increase,
				decrease,
				totalAmount,
				totalCost,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

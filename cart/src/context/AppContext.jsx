import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer/reducer.jsx';
import cartItems from '../data.js';
import { CLEAR_CART, INCREASE, REMOVE } from './action/action.jsx';

const AppContext = createContext();

const cart = new Map(cartItems.map((item) => [item.id, item]));

const initialState = {
	loading: false,
	cart: cart,
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
	};
	const remove = (id) => {
		dispatch({ type: REMOVE, payload: { id } });
	};

	const increase = (id) => {
		dispatch({ type: INCREASE, payload: { id } });
	};

	return (
		<AppContext.Provider value={{ ...state, clearCart, remove, increase }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer/reducer.jsx';
import cartItems from '../data.js';

const AppContext = createContext();

const cart = new Map(cartItems.map((item) => [item.id, item]));

const initialState = {
	loading: false,
	cart: cart,
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

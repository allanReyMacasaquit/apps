// utils.js
import { createContext, useContext, useState } from 'react';

export const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
	return useContext(AppContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppProvider = () => {
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openSidebar = () => {
		setIsSidebarOpen(true);
	};
	const closeSidebar = () => {
		setIsSidebarOpen(false);
	};
	const openModal = () => {
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return {
		isSidebarOpen,
		isModalOpen,
		openSidebar,
		closeSidebar,
		openModal,
		closeModal,
	};
};

import PropTypes from 'prop-types';
import { AppContext, useAppProvider } from './utils';

export const AppProvider = ({ children }) => {
	const {
		isSidebarOpen,
		isModalOpen,
		openSidebar,
		closeSidebar,
		openModal,
		closeModal,
	} = useAppProvider();

	return (
		<AppContext.Provider
			value={{
				isSidebarOpen,
				isModalOpen,
				openSidebar,
				closeSidebar,
				openModal,
				closeModal,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

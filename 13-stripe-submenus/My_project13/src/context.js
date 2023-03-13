import React, { useState, useContext } from 'react';
import sublinks from './data';


// // create context
const AppContext = React.createContext();


const AppProvider = ({ children }) => {
// state values
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [page, setPage] = useState({ page: '', links: [] });
    const [location, setLocation] = useState({});

    // state values
    const openSidebar = () => {
        setIsSidebarOpen(true);
    };

// state values
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    // static values
    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page);
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    };

    // static values
    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    };

// Context Api  Provider with values
    return (
        <AppContext.Provider
            value={{
                isSidebarOpen,
                openSidebar,
                closeSidebar,
                isSubmenuOpen,
                openSubmenu,
                closeSubmenu,
                page,
                location,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
// make  own custom hook
export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };

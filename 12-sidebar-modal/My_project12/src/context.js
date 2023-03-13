import React, { useState, useContext, Children } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const[isSidebarOpen,setIsSidebarOpen]=useState(false);
    const[isModalbarOpen,setIsModalOpen]=useState(false);

    const openSidebar=()=>{
        setIsSidebarOpen(true);
    }

    const closeSidebar=()=>{
        setIsSidebarOpen(false);
    }
    const openModel=()=>{
        setIsModalOpen(true);
    }

    const closeModal=()=>{
        setIsModalOpen(false);
    }

    return <AppContext.Provider value={{isModalbarOpen,isSidebarOpen,openModel,openSidebar,closeModal,closeSidebar}}>{children}</AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext);
}
export { AppContext, AppProvider };
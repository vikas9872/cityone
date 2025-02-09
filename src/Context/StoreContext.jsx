import { createContext, useState, useEffect } from 'react';

// Create the StoreContext
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    // Function to toggle theme
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    // Context value
    const contextValue = {
        theme,
        toggleTheme,
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;

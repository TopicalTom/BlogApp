import React, { useContext, createContext } from 'react';

const BlogContext = createContext();

// Custom Blog Hook
export function useBlog() {
    return useContext(BlogContext)
}

export const BlogProvider = ({ children }) => {

    return (
        <BlogContext.Provider value={5}>
            {children}
        </BlogContext.Provider>
    );
};


import { createContext, useState } from "react";



export const SearchContext = createContext();

export const SearchProvider = ({children}) => {
  const [searchQuery, setSearchQuery] = useState(""); // State For search query

return (
    <SearchContext.Provider value={{searchQuery, setSearchQuery }} >
        {children}
    </SearchContext.Provider>
);
};


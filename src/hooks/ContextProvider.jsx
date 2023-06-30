import React, { createContext, useState } from 'react';

const MyContext = createContext();

function ContextProvider({ children }) {
    const [query, setQuery] = useState('')
    const [imgArr, setImgArr] = useState([])   
    const value = {
        query,
        setQuery,
        imgArr,
        setImgArr,
    }  
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export  { ContextProvider, MyContext }

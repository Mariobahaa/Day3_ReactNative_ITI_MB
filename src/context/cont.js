import React, { createContext } from 'react';
import { useReducer } from 'react';
import { usersReducer } from '../reducers/reducer'

export const context = createContext();
context.displayName = 'users';



export const UsersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(usersReducer, { usersList: [], userDetails: null, page: 1 })
    return <context.Provider value={{ state, dispatch }}>
        {children}
    </context.Provider>
}




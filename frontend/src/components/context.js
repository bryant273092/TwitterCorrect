import React, { useMemo, useState } from 'react'

export const sessionData = {
    userInfo: {},
    userTweets: [],
    isAuthenticated: false,
    auth: '',
    token: ''
}
export const SessionContext = React.createContext(sessionData)

export const UIProvider = (props) => {
    const setupSession = () => {
        localStorage.setItem('state', JSON.stringify(sessionData))
    }
    const value = useMemo(() => ({
        setupSession
    }))

    return <SessionContext.Provider value={value} {...props} />
}

export const ManagedUIContext = ({ children }) =>  {
    return (
        <UIProvider>
            {children}
        </UIProvider>
    )
}
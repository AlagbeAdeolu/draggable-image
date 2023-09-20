import React, { createContext, useCallback, useEffect, useState } from "react";

let logoutTimer;

const initialState = {
    token: '',
    isLoggedIn: false,
    login: (token) => { },
    logout: () => { }
}

const retrievedStoredData = () => {
    const storedToken = localStorage.getItem('token')
    const storedExpirationTime = localStorage.getItem('expirationItem')

    const remainingTime = calculateRemainingTime(storedExpirationTime)
    if (remainingTime <= 60000) {
        localStorage.removeItem('token')
        localStorage.removeItem('expirationitem')
        return null
    }

    return {
        token: storedToken,
        duration: storedExpirationTime
    }
}

export const AuthContext = createContext(initialState)

const calculateRemainingTime = (expirationTime) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime()
    const remainingDuration = adjExpirationTime - currentTime

    return remainingDuration
}

const AuthContextProvider = ({ children }) => {
    const tokenData = retrievedStoredData()
    let initialToken
    if (tokenData) {
        initialToken = tokenData.token
    }
    const [token, setToken] = useState(initialToken)

    const userIsLoggedIn = !!token
    
    const logoutHandler = useCallback(() => {
        setToken(null)
        localStorage.removeItem('token')
        localStorage.removeItem('expires in')

        if (logoutTimer) {
            clearTimeout(logoutTimer)
        }
    }, [])

    const loginHandler = (token, expirationTime) => {
        setToken(token)
        localStorage.setItem('token', token)
        localStorage.setItem('expires in', expirationTime)

        const remainingTime = calculateRemainingTime(expirationTime)

        logoutTimer = setTimeout(logoutHandler, remainingTime)
    }



    useEffect(() => {
        if (tokenData) {
            logoutTimer = setTimeout(logoutHandler, tokenData.duration)
        }
    }, [tokenData, logoutHandler])
    const contextValue = {
        token: token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler
    }


    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>
}

export default AuthContextProvider
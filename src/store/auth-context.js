import { createContext, useState } from "react"

const initialState = {
    token: '',
    isAuthenticated: false,
    isLoading: false,
    login: (token) => { },
    logout: () => { }
}

const getStoredToken = () => {
    const storedToken = localStorage.getItem('token')
    return {token: storedToken}
}


export const AuthContext = createContext(initialState)

const AuthContextProvider = ({ children }) => {
    let tokenData = getStoredToken()
    let initialToken
    if (tokenData) {
        initialToken = tokenData.token
    }
    const [token, setToken] = useState(initialToken)
    const [isLoading, setIsLoading] = useState(false)
    const userIsLoggedIn = !!token

    const loginHandler = (token) => {
        setIsLoading(true)
        setToken(token)
        localStorage.setItem('token', token)
        setIsLoading(false)
    }
    const logoutHandler = () => {
        setIsLoading(true)
        setToken(null)
        localStorage.removeItem('token')
        setIsLoading(false)
    }
    
    const contextValue = {
        token: token,
        isAuthenticated: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
        isLoading: isLoading
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>)
}

export default AuthContextProvider
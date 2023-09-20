import { createContext, useState } from "react";

const initialState = {
  token: "",
  isAuthenticated: false,
  isLoading: false,
  login: (token) => {},
  logout: () => {},
};

const getStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  return { token: storedToken };
};

export const AuthContext = createContext(initialState);

const AuthContextProvider = ({ children }) => {
  let tokenData = getStoredToken();
  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);
  const [isLoading, setIsLoading] = useState(false);
  const userIsLoggedIn = !!token;

  const loginHandler = (token) => {
    setIsLoading(true); // Set loading to true before making an asynchronous action
    // Simulate an async action
    setTimeout(() => {
      setToken(token);
      localStorage.setItem("token", token);
      setIsLoading(false); // Set loading to false when the action is completed
    }, 2000); // Adjust the delay as needed
  };

  const logoutHandler = () => {
    setIsLoading(true); // Set loading to true before making an asynchronous action
    // Simulate an async action
    setTimeout(() => {
      setToken(null);
      localStorage.removeItem("token");
      setIsLoading(false); // Set loading to false when the action is completed
    }, 2000); // Adjust the delay as needed
  };

  const contextValue = {
    token: token,
    isAuthenticated: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    isLoading: isLoading,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

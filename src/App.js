import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './store/auth-context';
import SearchResults from './components/SearchResults';


function App() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Home /> : <Login />} />
      <Route path='/search' element={<SearchResults />} />
      <Route path='*' element={<p>NOT FOUND</p>} />
    </Routes>


  );
}

export default App;

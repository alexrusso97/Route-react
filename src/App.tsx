import React, { createContext, useContext, useState } from 'react';
import Login from './components/Login';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';


export const Context = createContext({})




function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  /*function ProtectedRoute({ isAuthenticated }: any) {
    if (isAuthenticated === false) {
      return <Navigate to="/login" replace />
    } else return <Home />;
  }*/
  function ProtectedRoute({ isAuthenticated }: any) {
    if (isAuthenticated === false) return <Navigate to="/login" />;
    return <Outlet />;
    }
  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute isAuthenticated={isAuthenticated === true} />}>
            <Route path='/' element={<Home />} />
          </Route>
          <Route path='/post/:id' element= {<Post />}/>

        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

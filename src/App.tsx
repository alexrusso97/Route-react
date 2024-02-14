import React, { createContext, useState } from 'react';
import Login from './components/Login';
import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Post from './components/Post';


export const Context = createContext({})

function Redirect() {
  return <Navigate to="/404" replace />;
}

function RouteNotFound() {
  return <div>Ops! Pagina non trovata</div>;
}



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  function ProtectedRoutes({ isAuthenticated }: any) {
    if (isAuthenticated === false) return <Navigate to="/login" />;
    return <Outlet />;
  }
  return (
    <Context.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />

          <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated === true} />}>
            <Route path='/' element={<Home />} />
            <Route path='/post/:id' element={<Post />} />
          </Route>
          
          <Route path="/404" element={<RouteNotFound />} />
          <Route path="*" element={<Redirect />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;

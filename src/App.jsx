import React from 'react';
import {
  BrowserRouter as Router, Routes, Route, Navigate,
} from 'react-router-dom';

import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';
import router from './routes';
import Main from './pages/Main.jsx';
// import Signup from './pages/Signup.jsx'; 
import useAuth from './hooks/useAuth.jsx';

import AuthProvider from './contexts/AuthProvider.jsx';

const {
  pages: {
    home, signup, login, notFound,
  },
} = router;

const PrivateRoute = ({ children }) => {
  const auth = useAuth();
  return (
    auth.loggedIn ? children : <Navigate to={login} />
  );
};

const App = () => (
  
  <AuthProvider>
    <Router>
      <div className="d-flex flex-column h-100">

        <Routes>
          <Route path={login} element={<Login />} />
          <Route path={notFound} element={<NotFound />} />
          <Route
            path={home}
            element={(
              <PrivateRoute>
                <Main />
              </PrivateRoute>
            )}
          />
        </Routes>
      </div>
    </Router>
  </AuthProvider>
);

export default App;
//<Route path={signup} element={<Signup />} />

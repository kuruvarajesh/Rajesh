import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from './components/LoginForm/LoginForm';
import Dashboard from './components/Dashboard/Dashboard';
import Transactions from './components/Transactions/Transactions';
import Profile from './components/Profile/Profile';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import {HOME_ROUTE_PATH,TRANSACTIONS_ROUTE_PATH, PROFILE_ROUTE_PATH } from './constants';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
         <Route element={<ProtectedRoute />}>
            <Route exact path={HOME_ROUTE_PATH} element={ <Dashboard />}  /> 
            <Route exact path={TRANSACTIONS_ROUTE_PATH} element={<Transactions />} />
            <Route exact path={PROFILE_ROUTE_PATH} element={<Profile />} />
         </Route>
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

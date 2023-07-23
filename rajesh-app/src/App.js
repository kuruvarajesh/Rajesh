import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard';
import Transactions from './components/Transactions/Transactions';
import Profile from './components/Profile/Profile';
import {HOME_ROUTE_PATH,TRANSACTIONS_ROUTE_PATH, PROFILE_ROUTE_PATH } from './constants';


function App() {
  
  return (
   <BrowserRouter >
      <Sidebar />
   <Routes>
      <Route exact path={HOME_ROUTE_PATH} element={ <Dashboard />}  /> 
      <Route exact path={TRANSACTIONS_ROUTE_PATH} element={<Transactions />} />
      <Route exact path={PROFILE_ROUTE_PATH} element={<Profile />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

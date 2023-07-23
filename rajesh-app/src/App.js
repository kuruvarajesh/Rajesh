import { BrowserRouter,Route, Routes } from 'react-router-dom';

import Sidebar from './components/Sidebar/Sidebar'
import Dashboard from './components/Dashboard/Dashboard';
import Transactions from './components/Transactions/Transactions';
import Profile from './components/Profile/Profile';


function App() {
  
  return (
   <BrowserRouter >
      <Sidebar />
   <Routes>
      <Route exact path="/" element={ <Dashboard />}  /> 
      <Route exact path="/transactions" element={<Transactions />} />
      <Route exact path="/profile" element={<Profile />} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;

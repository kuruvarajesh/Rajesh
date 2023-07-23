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
















// import Sidebar from './components/Sidebar/Sidebar';
// import './App.css';
// import Main from './components/Main/Main';
// import { useState } from 'react';

// function App() {
//   const [sidebarTab,setSidebarTab] = useState(0)

//   const handleTabChange = (tab)=>{
//     console.log(tab)
//       setSidebarTab(tab)
//   }

//   return (
//     <div style={{display:"flex",}}>
//       <div style={{width:"250px"}}>
//       <Sidebar handleTabChange = {handleTabChange}/>
//       </div>
//       <div style={{flex:1,}}>
//       <Main  tab={sidebarTab}/>
//       </div>
//     </div>
//   );
// }

// export default App;

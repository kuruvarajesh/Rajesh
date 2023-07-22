import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Main from './components/Main/Main';
import { useState } from 'react';

function App() {
  const [sidebarTab,setSidebarTab] = useState(0)

  const handleTabChange = (tab)=>{
    console.log(tab)
      setSidebarTab(tab)
  }

  return (
    <div style={{display:"flex",}}>
      <div style={{width:"250px"}}>
      <Sidebar handleTabChange = {handleTabChange}/>
      </div>
      <div style={{flex:1,}}>
      <Main  tab={sidebarTab}/>

      </div>
    </div>
  );
}

export default App;

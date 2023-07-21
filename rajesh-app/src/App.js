import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import Main from './components/Main/Main';

function App() {
  return (
    <div style={{display:"flex",justifyContent:'flex-start'}}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

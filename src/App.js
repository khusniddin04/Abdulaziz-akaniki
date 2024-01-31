import { Outlet } from 'react-router-dom';
import './App.css';
import Footers from './components/Footers';
import Hiuder from './components/Hiuder';



function App() {
  return (
    <div className="App">
      <Hiuder/>
       <Outlet/>
      <Footers/>
     
      
      
    </div>
  );
}

export default App;

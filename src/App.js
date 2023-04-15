import './App.css';
<<<<<<< Updated upstream
// import {Home} from './Screens/Home';
import {Carbon} from './Screens/carbon';
import {Navbar} from './Components/Navbar';
=======
import Navbar from './Components/Navbar';
import {Home} from './Screens/Home';
import {About} from './Screens/About';
import {News} from './Screens/News';
import {Carbon} from './Screens/carbon';
import {Route ,Routes, Navigate} from 'react-router-dom';
>>>>>>> Stashed changes
function App() {
  return (
    <div className="App">
      <Navbar/>
<<<<<<< Updated upstream
      <Carbon/>
=======
      <Routes>
          <Route path='/' element={<Navigate to="/Home"/>}/>
          <Route path='/Home' element={<Home/>}/>
          <Route path='/About' element={<About/>}/>
          <Route path='/News' element={<News/>}/> 
          <Route path='/Carbon' element={<Carbon/>}/>
        </Routes>
>>>>>>> Stashed changes
    </div>
  );
}

export default App;

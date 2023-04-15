import './App.css';
// import {Home} from './Screens/Home';
import {Carbon} from './Screens/carbon';
import {Navbar} from './Components/Navbar';
import {News} from './Screens/News';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <News/>
    </div>
  );
}

export default App;

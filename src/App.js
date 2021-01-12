import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/home';
import { Switch, Route} from 'react-router-dom';
import Budash from './pages/buDash';
import myTeam from './pages/myTeam';

function App() {
  return (
    <div className='app'>
      <Navbar />
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/budash' exact component={Budash}></Route>
          <Route path='/my-team' exact component={myTeam}></Route>
        </Switch>
      <Footer />
    </div>
  );
}

export default App;

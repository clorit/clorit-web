import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/LoginTemplate';
import { Route } from 'react-router-dom';
import Ranking from './components/Ranking';
import Upload from './components/Upload';

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} />
      <Route path='/ranking' component={Ranking} />
      <Route path='/upload' component={Upload} />
    </div>
  );
}

export default App;

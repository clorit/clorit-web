import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/LoginTemplate';
import { Route } from 'react-router-dom';
import Ranking from './components/Ranking';
import Upload from './components/Upload';
import Register from './components/RegisterTemplate';
import Artists from './components/Artists';
import DetailedSearch from './components/DetailedSearch';

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} />
      <Route path='/ranking' component={Ranking} />
      <Route path='/upload' component={Upload} />
      <Route path='/register' component={Register} />
      <Route path='/artists' component={Artists} />
      <Route path='/search' component={DetailedSearch} />
    </div>
  );
}

export default App;

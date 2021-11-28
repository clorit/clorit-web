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
import Codi from './components/Codi';
import Jimin from './components/Jimin';
import DetailedJimin from './components/DetailedJimin';
import Bts from './components/Bts';

function App() {
  return (
    <div>
      <Route path='/' component={Home} exact />
      <Route path='/login' component={Login} />
      <Route path='/ranking' component={Ranking} />
      <Route path='/upload' component={Upload} />
      <Route path='/register' component={Register} />
      <Route path='/artists' component={Artists} />
      <Route path='/codi' component={Codi} />
      <Route path='/search' component={DetailedSearch} />
      <Route path='/jimin' component={Jimin} />
      <Route path='/detailed_jimin' component={DetailedJimin} />
      <Route path='/bts' component={Bts} />
    </div>
  );
}

export default App;

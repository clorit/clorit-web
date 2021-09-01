import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Login from "./components/LoginTemplate";
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/login" component={Login} />
    </div>
  );
}

export default App;

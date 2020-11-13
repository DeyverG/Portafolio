import Header from "./components/Header";
import Contact from "./views/Contact";
import Home from "./views/Home";
import Portafolio from "./views/Portafolio";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/Portafolio" component={Portafolio}/>
        <Route exact path="/Contact" component={Contact}/>
      </Switch>
    </Router>
  );
}

export default App;

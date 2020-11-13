
import './App.css';
import{BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./components/pages/Home"
import Navbar from './components/Navbar';


function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/services" exact component={Services} />
      <Route path="/products" exact component={Products} />
      <Route path="/signup" exact component={SignUp} />
     </Switch>

    </Router>
    </>
  );
}

export default App;

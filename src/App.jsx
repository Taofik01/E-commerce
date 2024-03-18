import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Products from "./component/Products";
import {Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/products" component={Products} />
      </Switch>
      console.log('I am a boy');
    </>
  );
}

export default App;

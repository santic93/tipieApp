import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./Components/Login";
import Empleados from "./Components/Empleados";
import Home from "./Components/Home";


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/empleados" component={Empleados} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

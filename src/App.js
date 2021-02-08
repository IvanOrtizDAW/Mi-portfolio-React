import "./App.css";
import Header from "./Header";
import Contact from "./Contact";
import Home from "./Home";
import Diseno from "./Diseno";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Switch>
          <Route path="/contacto">
            <Contact />
          </Route>
          <Route path="/diseno">
            <Diseno />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

      <Footer />
      <res />
    </div>
  );
}

export default App;

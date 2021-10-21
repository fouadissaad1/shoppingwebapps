import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import '../src/services/firestore';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/pages/Home";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Children from "./components/pages/Children";
import { About } from "./components/pages/About";
import Men from "./components/pages/Men";
import Login from "./components/pages/Login/Login";
import Contact from "./components/pages/Contact";
import Women from "./components/pages/Women";

function App() {

  return (

      <>
          <div className="App">
              <Router>
                  <Header/>
                  <Route exact path="/" component={ Home } />
                  <Route path="/Men" component={ Men } />
                  <Route path="/Women" component={ Women } />
                  <Route path="/Children" component={ Children } />
                  <Route path="/About" component={ About } />
                  <Route path="/Contact" component={ Contact } />
                  <Route path="/Login" component={ Login } />

                  <Footer/>
              </Router>
          </div>

      </>

  );
}

export default App;

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import '../src/services/firestore';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/pages/Home";
import { About } from "./pages/About";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";

function App() {

  return (

      <>
          <div className="App">
              <Router>
                  <Header/>
                  <Route exact path="/" component={ Home } />
                  <Route path="/about" component={ About } />

                  <Footer/>
              </Router>
          </div>

      </>

  );
}

export default App;

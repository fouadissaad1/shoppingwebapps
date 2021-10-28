import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from "./components/pages/Home";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Children from "./components/pages/Children";
import { About } from "./components/pages/About";

import Login from "./components/pages/Login/Login";
import Contact from "./components/pages/Contact";
import Women from "./components/pages/Women";
import Book from "./components/pages/Book";
import Services from "./components/pages/Services";
import Delivery from "./components/pages/Delivery";
import "./services/firestore";
import Register from "./components/pages/signup/Register";
import Logout from "./components/pages/LoginOut/Logout";
import Men from "./components/pages/Men";
import Error from "./components/pages/Error";


function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Route path="/" exact/>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/Men" component={Men}/>
                <Route path="/Women" component={Women}/>
                <Route path="/Children" component={Children}/>
                <Route path="/About" component={About}/>
                <Route path="/Contact" component={Contact}/>
                <Route path="/Login" component={Login}/>
                <Route path="/Book" component={Book}/>
                <Route path="/Services" component={Services}/>
                <Route path="/Delivery" component={Delivery}/>
                <Route path="/Register" component={Register}/>
                <Route path="/Logout" component={Logout}/>
                <Route path="*/*" component={Error}/>
            </Switch>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;

import './Navbar.css';
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { MDBAnimation, MDBNav } from "mdbreact";
import { About } from "../../pages/About";
import {Contact} from "../../pages/Contact";
import Children from "../../pages/Children";
import { Womens } from "../../pages/Women";
import Men from "../../pages/Men";
import Home from "../pages/Home";
import Login from "../../pages/Login";
import Book from "../../pages/Book";




function NavBar() {
    const [open, setOpen]=useState(false);
    return (
        <Router>
            <div>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                <MDBNav className="navbar" color="indigo" dark expand="md">
                    <div className="brand-title">
                        <MDBAnimation type="bounce" infinite>
                            <h3>Shopping</h3>
                        </MDBAnimation>
                    </div>
                    <div className="navbar-links" >

                        <ul style={{transform: open ? "translateX(0px)" :"translateX(-500px)"}}>

                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/Men">MEN'S WEAR</Link>
                            </li>
                            <li>
                                <Link to="/Women">WOMEN'S WEAR</Link>
                            </li>
                            <li>
                                <Link to="/Children">CHILDREN</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/Contact">Contact</Link>
                            </li>
                            <li>
                                <Link to={"/Login"}>Login</Link>
                            </li>
                        </ul>
                        <Link to={"/Book"}></Link>
                        <i onClick={()=>setOpen(!open)} className="fas fa-bars burger"></i>
                    </div>


                </MDBNav>

                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    {/* eslint-disable-next-line no-undef */}
                    <Route exact path="/" component={Home}>
                        {/* eslint-disable-next-line react/jsx-no-undef */}

                    </Route>
                    {/* eslint-disable-next-line no-undef */}
                    <Route path="/MEN" component={Men}>

                    </Route>
                    {/* eslint-disable-next-line no-undef */}
                    <Route path="/WOMEN" component={Womens}>


                    </Route>
                    {/* eslint-disable-next-line no-undef */}
                    <Route path="/CHILDREN" component={Children}>

                    </Route>
                    <Route path="/About" component={About}>

                    </Route>
                    {/* eslint-disable-next-line no-undef */}
                    <Route path="/Contact" component={Contact}>

                    </Route>
                    {/* eslint-disable-next-line no-undef */}
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Router  path="/book" component={Book}>
                    </Router>

                </Switch>

            </div>
        </Router>
    );
}

export default NavBar
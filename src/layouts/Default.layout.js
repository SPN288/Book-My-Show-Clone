import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import NavBar from "../components/Navbar/Navbar.component";
import HeroCarousal from "../components/HeroCarousal/Hero.Components";
const DefaultLayout = (props) => {
    return (
        <>
            <NavBar/>
            <HeroCarousal/>
            {props.children}
        </>
    );
};

export default DefaultLayout;
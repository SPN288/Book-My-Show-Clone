import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MovieNavBar from "../components/Navbar/movienavbar.component";
const MovieLayout = (props) => {
    return (
        <>
            <MovieNavBar/>
    
            {props.children}
        </>
    );
};

export default MovieLayout;
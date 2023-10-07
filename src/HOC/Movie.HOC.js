import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MovieLayout from "../layouts/movies.layout";
 
const MovieHOC=({ component: Component, ...rest})=>{
    return(
        <>
        <Route {...rest}

        component={(props)=>(
            <MovieLayout>
                <Component {...props} />
            </MovieLayout>
        )}

        />
        </>
    );
};

export default MovieHOC;


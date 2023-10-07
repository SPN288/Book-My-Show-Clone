import React from "react";

const MovieHero =()=>{
    return(
        <>
        <div className="md:hidden" style={{height:"calc(180vw)"}}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygV1EgBp2iAqnps9fLS9KymXs0RfUOrO5wA&usqp=CAU" alt="avengers image" className="w-full"/>
            
        </div>

        <div className="hidden md:block lg:hidden">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygV1EgBp2iAqnps9fLS9KymXs0RfUOrO5wA&usqp=CAU" alt="avengers image"className="w-full"/>
            
        </div>
        
        <div className="relative hidden lg:block" style={{height: "30rem"}}>
        <div className="absolute h-full w-full z-10"></div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTygV1EgBp2iAqnps9fLS9KymXs0RfUOrO5wA&usqp=CAU" alt="avengers image" className="w-full h-full"/>
            
        </div>
        </>
    )
};

export default MovieHero;
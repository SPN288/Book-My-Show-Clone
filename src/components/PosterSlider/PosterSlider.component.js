import React from "react";
import Poster from "../Poster/Poster.component";
import setting from "../../Config/PosterCarousel.config";
import { Premier } from "../Premier/Premier.component";
import Slider from "react-slick";

const PosterSlider =(props)=>{
    return(
        <>
        <div className="flex flex-col item-start py-4">
            <h3 className={`text-2xl font-bold ${props.isDark ? "text-white" :"text-black"} `}>{props.title}</h3>
            <p className={`text-sm font-bold ${props.isDark ? "text-white" :"text-black"} `}>{props.subtitle}</p>
        </div>
        <Slider { ...setting}>
            {props.images.map((image)=>(
                <Poster {...image} isDark={props.isDark}/>
            ))}
        </Slider>
        </>
    )
}

export default PosterSlider;
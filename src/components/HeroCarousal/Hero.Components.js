import React, {useState,useEffect}from "react";
import HeroSlider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const HeroCarousal=()=> {

    const [images , setImages]=useState([]);

    useEffect(()=>{
      const requestNowPlayingovies= async()=>{
        const getImages = await axios.get("/movie/now_playing");
        setImages(getImages.data.results);
        console.log(getImages);
      }
      requestNowPlayingovies();
    },[]);



  var settingsLg = {
    arrows:true,
    autoPlay:true,
    centerMode :true,
    centerPadding :"300px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  var settings = {
    arrows:true,
    autoPlay:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  
  return (

    <>

    <div className="lg:hidden">
    <HeroSlider {...settings}>
      {
        images.map((images)=>(
          <div className="w-full h-64 md:64 py-3">
            <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} className="w-full h-full rounded-md" />
          </div>
        ))
      }
    </HeroSlider>
    </div>

    <div className=" hidden lg:block">
    <HeroSlider {...settingsLg}>
      {
        images.map((images)=>(
          <div className="w-full h-96 px-2 py3 ">
            <img src={`https://image.tmdb.org/t/p/original${images.backdrop_path}`} className="w-full h-full rounded-lg" />
          </div>
        ))
      }
    </HeroSlider>
    </div>
    </>







    
  );
}



export default HeroCarousal;
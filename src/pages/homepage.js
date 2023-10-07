import React, {useState,useEffect} from "react";
import axios from "axios";
import EntertainmentCardSlider from "../components/Entertaiment/Emtertainment.component";
import { Premier } from "../components/Premier/Premier.component";
import PosterSlider from "../components/PosterSlider/PosterSlider.component";
const Home = () => {

        const [popularMovies , setPopularMovies]= useState([]);

        useEffect(()=>{
            const requestPopularMovies = async () =>
            {
                const getPopularMovies = await axios.get("/movie/popular");
                setPopularMovies(getPopularMovies.data.results);
            };
            requestPopularMovies();
        },[]);


    return (
        <>
            <div className="flex flex-col gap-10">
                <div>
                    <EntertainmentCardSlider />
                </div>
                <div className="bg-navCol-50 py-16 ">
                    <div className="container mx-auto px-4">
                        <div className="flex">
                            <img src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/premiere-banner-web-collection-202208191200.png"
                                alt="rupay" className="w-full h-full" />
                        </div>
                        <PosterSlider images={popularMovies} title="Premiers" subtitle="Brand new releases everyday" isDark/>
                    </div>

                </div>
            <div className="container px-4 mx-auto">
            <PosterSlider images={popularMovies} title="Online" subtitle="sub" isDark={false} />
            </div>
            </div>
        </>
    );
};

export default Home;
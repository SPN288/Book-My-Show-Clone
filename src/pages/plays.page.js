import React from "react";
import Poster from "../components/Poster/Poster.component";
import PlaysFilter from "../components/PlaysFilter/Playsfilter.coponent";

const plays = () => {
    return (
        <>  <div className="container x-auto mx-4 px-4">
            <div className="w-full lg:flex  lg:flex-row-reverse">
            
            <div className="lg:w-8/12">
            <h1 className="text-2xl font-bold mb-4 mt-8">Plays in Bhuneswar</h1>
                <div className="flex flex-wrap">
                    <div className="w-1/2 my-3 md:1/3 lg:w-1/4">
                        <Poster src="https://www.spelhuis.be//Files/7/112000/112353/ProductPhotos/448/1895702343.jpg.webp"
                            title="Aveners play" subtitle="English" />
                    </div >
                    <div className="w-1/2 my-3 md:1/3 lg:w-1/4">
                        <Poster src="https://www.spelhuis.be//Files/7/112000/112353/ProductPhotos/448/1895702343.jpg.webp"
                            title="Aveners play" subtitle="English" />
                    </div >
                    <div className="w-1/2 my-3 md:1/3 lg:w-1/4">
                        <Poster src="https://www.spelhuis.be//Files/7/112000/112353/ProductPhotos/448/1895702343.jpg.webp"
                            title="Aveners play" subtitle="English" />
                    </div >
                    <div className="w-1/2 my-3 md:1/3 lg:w-1/4">
                        <Poster src="https://www.spelhuis.be//Files/7/112000/112353/ProductPhotos/448/1895702343.jpg.webp"
                            title="Aveners play" subtitle="English" />
                    </div >
                    <div className="w-1/2 my-3 md:1/3 lg:w-1/4">
                        <Poster src="https://www.spelhuis.be//Files/7/112000/112353/ProductPhotos/448/1895702343.jpg.webp"
                            title="Aveners play" subtitle="English" />
                    </div >
                    <div className="w-1/2 my-3 md:1/3 lg:w-1/4">
                        <Poster src="https://www.spelhuis.be//Files/7/112000/112353/ProductPhotos/448/1895702343.jpg.webp"
                            title="Aveners play" subtitle="English" />
                    </div >
                    <div className="w-1/2 my-3 md:1/3 lg:w-1/4">
                        <Poster src="https://www.spelhuis.be//Files/7/112000/112353/ProductPhotos/448/1895702343.jpg.webp"
                            title="Aveners play" subtitle="English" />
                    </div >
                    <div className="w-1/2 my-3 md:1/3 lg:w-1/4">
                        <Poster src="https://www.spelhuis.be//Files/7/112000/112353/ProductPhotos/448/1895702343.jpg.webp"
                            title="Aveners play" subtitle="English" />
                    </div >
                    
                </div>
            </div>
            
            <div className="lg:w-1/4 ">
                        <h2 className="text-2xl font-bold mb-4 mt-8">Filters</h2>
                        <PlaysFilter title="Date" tag={["Today","Toorow","weekend"]}/>
                        <PlaysFilter title="Language" tag={["English","Hindi","Punjabi"]}/>
                        <PlaysFilter title="Location" tag={["Here","Local","Hillstation"]}/>
            </div>
                

            </div>
        </div>
        </>
    );
};

export default plays;
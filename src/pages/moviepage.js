import React from "react";
import MovieHero from "../components/MovieHero/movieHero.component";
import { AiFillVideoCamera } from "react-icons/ai"

const movie = () => {
    return (
        <>
            <MovieHero />
            <div className="my-12 container px-20 lg:w-3/5 lg:ml-3">
                <div className="flex flex-col gap-3">
                    <h2 className="font-bold text-2xl  ">About the movie</h2>
                    <p>soethin will e written here aout the ovie and this pararaph is supposed to e lon so i
                        a writin soe rando stuff here just for fun and i a still typin
                    </p>
                </div>
                <div className="my-8">
                    <hr />
                </div>
                <div>
                    <h1 className="font-bold text-2xl">Applicable Offers</h1>
                    <div className="flex item-start bg-yellow-100 border-yellow-400 w-96 border-2 border-dashed rounded p-3">
                        <AiFillVideoCamera className="w-8 h-8" />
                        <div className="flex flex-col item-start gap-1">
                            <h1 className="text-xl">Filmy Pass</h1>
                            <p>Get 100% discount</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default movie;
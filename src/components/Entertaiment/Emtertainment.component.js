import React from "react";
import Slider from "react-slick";

const EntertainmentCard = (props) => {
    return (
        <>
            <div className="w-60 h-56 px-2">
                <img className="w-full h-full rounded-xl"
                    src={props.src} alt="entertainment image" />
            </div>
        </>
    );

};

const EntertainmentCardSlider = () => {
    const Entertainmentimages = [
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/workshop-and-more-web-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MyBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/kids-zone-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-MTUrIEV2ZW50cw%3D%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/comedy-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/music-shows-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NCBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/esports-collection-202211140440.png",
        "https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-800,h-800:ote-NiBFdmVudHM%3D,otc-FFFFFF,otf-Roboto,ots-64,ox-48,oy-320,ott-b:w-300:q-80/upskill-collection-202211140440.png"
    ]
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        InitialSlide: 0
    }

    return (
        <>
        <h1 className="text-slate-950 text-2xl font-bold my-6 p-3">The Best Of Live Events</h1>
            <Slider {...settings}>
                {Entertainmentimages.map((images) => (
                    <EntertainmentCard src={images} />
                ))}
            </Slider>
        </>
    )

}
export default EntertainmentCardSlider;
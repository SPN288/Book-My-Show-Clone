const setting={
    infinite:true,
    autoplay:false,
    slidesToShow:5,
    SlidesToScroll:2,
    InitialSlider:0,
    responsive: [
        {
            breakpoint: 1024,
            setting:{
                slidesToShow:3,
                SlidesToScroll:3
            }
        },
        {
            breakpoint: 600,
            setting:{
                slidesToShow:2,
                SlidesToScroll:2
            }
        },
        {
            breakpoint: 400,
            setting:{
                slidesToShow:1,
                SlidesToScroll:1
            }
        }
    ]
};
export default setting;
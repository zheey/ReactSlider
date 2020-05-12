import React, {useEffect, useState, useRef} from 'react'
import SliderIndicator from "./SliderIndicator";
import sample1 from "./images/Group 69.png";
import sample2 from "./images/image (5).png";
import sample3 from "./images/image (6).png";
import { useIntersectionObserver } from "./useIntersectionObserver";

const sampleData = [sample1, sample2, sample3];

const App = ({ sliderData=sampleData }) => {
    const [sliderIndex, setSliderIndex] = useState(0);
    const elementRef = useRef(null);
    const [inView, entry] = useIntersectionObserver(elementRef, { threshold: 0 });

    useEffect( () => {
        if (inView) {
            const interval = setInterval(() => {
                if (sliderIndex < sliderData.length - 1) {
                    setSliderIndex((sliderIndex + 1))
                } else {
                    return setSliderIndex((0));
                }
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [sliderIndex, inView]);

    return(
        <div className="slider-wrapper" ref={elementRef}>
            <div className="slider-indicator-wrapper">
                {sliderData.map((content, i) => (
                    <SliderIndicator active={sliderIndex === i} key={i}/>
                ))
                }
            </div>
            <div className="slider-main">
                {sliderData[sliderIndex]}
            </div>
        </div>
    )
};

export default App;



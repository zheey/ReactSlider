import React, {useCallback, useEffect, useState} from 'react'
import SliderIndicator from "./SliderIndicator";
import sample1 from "./images/Group 69.png";
import sample2 from "./images/image (5).png";
import sample3 from "./images/image (6).png";

const sampleData = [sample1, sample2, sample3];

const App = ({ sliderData=sampleData }) => {
    const [sliderIndex, setSliderIndex] = useState(0);

    useEffect( () => {
        const interval = setInterval(() => {
            if (sliderIndex < sliderData.length - 1) {
                setSliderIndex((sliderIndex + 1))
            } else {
                return setSliderIndex((0));
            }

        }, 3000);
        return () => clearInterval(interval);
    }, [sliderIndex]);

    return(
        <div className="slider-wrapper">
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



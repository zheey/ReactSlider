import React from "react";

const SliderIndicator = ({ active=false }) => (
    <div className={`slider-indicator ${active === true ? "active-slider" : ""}`}/>
);

export default SliderIndicator;
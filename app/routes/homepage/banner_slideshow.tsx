import React, { useEffect, useState } from "react"
import robotic1 from "~/assets/slideshow/robotic1.png"
import robotic2 from "~/assets/slideshow/robotic2.png"
import robotic3 from "~/assets/slideshow/robotic3.png"
import robotic4 from "~/assets/slideshow/robotic4.png"
import robotic5 from "~/assets/slideshow/robotic5.png"
import scitech1 from "~/assets/slideshow/scitech1.png"
import scitech2 from "~/assets/slideshow/scitech2.png"
import scitech3 from "~/assets/slideshow/scitech3.png"
import scitech4 from "~/assets/slideshow/scitech4.png"
import scitech5 from "~/assets/slideshow/scitech5.png"
import scitech6 from "~/assets/slideshow/scitech6.png"

interface SlideshowProps {
}

const slideImages = [
    robotic1, robotic2, robotic3, robotic4, robotic5,
    scitech1, scitech2, scitech3, scitech4, scitech5, scitech6,
];

const colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];
const delay = 2000;


function Slideshow({ }: SlideshowProps) {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = window.setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow-container">
            <div className="slideshow">
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                >
                    {colors.map((backgroundColor, index) => (
                        <div
                            className="slide"
                            key={index}>
                            <img className="banner-slideshow-image"
                                src={slideImages[index]}  />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

export default Slideshow;

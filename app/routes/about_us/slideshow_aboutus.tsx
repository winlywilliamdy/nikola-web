import React from "react"
import aboutus1 from "~/assets/about_us/about_us_1.png"
import aboutus2 from "~/assets/about_us/about_us_2.png"
import aboutus3 from "~/assets/about_us/about_us_3.png"
import aboutus4 from "~/assets/about_us/about_us_4.png"
import aboutus5 from "~/assets/about_us/about_us_5.png"
import aboutus6 from "~/assets/about_us/about_us_6.png"

var subimages = [aboutus1, aboutus2, aboutus3, aboutus4, aboutus5, aboutus6];
const colors = ["#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF", "#FFFFFF"];

interface SlideshowAboutUsProps {
}

function SlideshowAboutUs({ }: SlideshowAboutUsProps) {
    const [index, setIndex] = React.useState(0);

    return (
        <div className="aboutus-slideshow-container">
            <div className="slideshow-image-container">
                <div className="slideshowSlider"
                    style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
                    {colors.map((backgroundColor, index) => (
                        <div
                            className="slide"
                            key={index}>
                            <img
                                src={subimages[index]} style={{ width: "60vw", height: "35vw", objectFit: "cover" }} />
                        </div>
                    ))}
                </div>
                <div className="subimage" >
                    <div className="subimage-container">
                        <button type="button" onClick={() => setIndex(0)}>
                            <img
                                src={aboutus1} alt="About Us" style={{ width: "6vw", height: "6vw", objectFit: "cover" }} /></button>
                    </div>
                    <div className="subimage-container">
                        <button type="button" onClick={() => setIndex(1)}>
                            <img
                                src={aboutus2} alt="About Us" style={{ width: "6vw", height: "6vw", objectFit: "cover" }} /></button>
                    </div>
                    <div className="subimage-container">
                        <button type="button" onClick={() => setIndex(2)}>
                            <img
                                src={aboutus3} alt="About Us" style={{ width: "6vw", height: "6vw", objectFit: "cover" }} /></button>
                    </div>
                    <div className="subimage-container">
                        <button type="button" onClick={() => setIndex(3)}>
                            <img
                                src={aboutus4} alt="About Us" style={{ width: "6vw", height: "6vw", objectFit: "cover" }} /></button>
                    </div>
                    <div className="subimage-container">
                        <button type="button" onClick={() => setIndex(4)}>
                            <img
                                src={aboutus5} alt="About Us" style={{ width: "6vw", height: "6vw", objectFit: "cover" }} /></button>
                    </div>
                    <div className="subimage-container">
                        <button type="button" onClick={() => setIndex(5)}>
                            <img
                                src={aboutus6} alt="About Us" style={{ width: "6vw", height: "6vw", objectFit: "cover" }} /></button>
                    </div>
                </div>
            </div>
            <div className="aboutus-content">
                <div className="aboutus-content-title">
                    Get to Know Us More!
                </div>
                <div className="aboutus-content-subtitle">
                    Nikola Academy is committed to provide high-quality education in science, technology, and robotics. Our team of experienced and skilled roboticists, scientists, and engineers work together to create a fun, challenging, and engaging learning environment. Our courses are designed to equip students with the skills, knowledge, and confidence they need to succeed in an increasingly technology-driven world. We believe that education should empower students to be creative problem solvers and encourage them to think outside the box.
                </div>
                <a className="try-button-aboutus" href='https://forms.gle/5c9mZDkQFCjNGeCR6' target="popup">
                    Book Free Trial On-Site
                </a>
            </div>
        </div>
    );
}

export default SlideshowAboutUs;

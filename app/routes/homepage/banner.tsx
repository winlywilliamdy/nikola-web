import banner from "~/assets/banner.png"

interface BannerProps {
}

function clickMe() {
    alert("You clicked me!");
}

function Banner({ }: BannerProps) {
    return (
        <div className="banner-container">
            <img
                src={banner} alt="Banner" width={"70%"} />
            <div className="tagline-title">
                Discover, Innovate, Invent
            </div>
            <p className="tagline-subtitle">
                Investing on future generation of all-rounded scientist, innovators, and inventors through <b>comprehensive</b> STEM learning
            </p>
        </div >
    );
}

export default Banner;

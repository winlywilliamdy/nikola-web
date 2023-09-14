import { Link } from "@remix-run/react/dist/components";
import loc1 from "~/assets/loc/loc_4.png";
import loc2 from "~/assets/loc/loc_5.png";
import loc3 from "~/assets/loc/loc_6.png";

interface RoboticLOC {
}
var imageToShow: string = loc1;
var imageList: string[] = [loc1, loc2, loc3];
var levelGradeList: string[] = ["Beginner", "Intermediate", "Advanced"];
var locContent = [
    [{
        "level": "Level 1",
        "levelName": "Science and Mechanics Adventures"
    },
    {
        "level": "Level 2",
        "levelName": "RoboBug with Microbit"
    },
    {
        "level": "Level 3",
        "levelName": "Basic Circuits with Microbit"
    },
    {
        "level": "Level 4",
        "levelName": "Omniwheel Robot with Microbit and Foundations of 3D Printing"
    }],
    [{
        "level": "Level 5",
        "levelName": "Fundamental of Python and GyroBot"
    },
    {
        "level": "Level 6",
        "levelName": "Basic Motors and Arduino with Ardublock"
    },
    {
        "level": "Level 7",
        "levelName": "BipedalBot"
    },
    {
        "level": "Level 8",
        "levelName": "SumoBot"
    }],
    [{
        "level": "Level 9",
        "levelName": "SoccerBot"
    },
    {
        "level": "Level 10",
        "levelName": "QuadrupedalBot"
    },
    {
        "level": "Level 11",
        "levelName": "Drone"
    },
    {
        "level": "Level 12",
        "levelName": "Introduction to Computer Vision"
    }],
];

var priceList = [
    {
        "title": "Robotics Basic",
        "price": "Rp 3,840,000",
        "level": "Beginner Level",
        "price-only": "Rp 2,800,000",
        "price-list1": "- Course Only",
        "price-list2": "- Science Advanced Kit Add-ons",
        "nikola-maker-link": "Available on Nikola Maker Shop",
        "loc-ask-us-button": "Ask Us!",
        "register-button": "Register Now"
    },
    {
        "title": "",
        "price": "",
        "level": "",
        "price-only": "",
        "price-list1": "",
        "price-list2": "",
        "nikola-maker-link": "",
        "loc-ask-us-button": "",
        "register-button": ""
    },
    {
        "title": "",
        "price": "",
        "level": "",
        "price-only": "",
        "price-list1": "",
        "price-list2": "",
        "nikola-maker-link": "",
        "loc-ask-us-button": "",
        "register-button": ""
    },
];


function RoboticLOC({ }: RoboticLOC) {
    function changeView(idx: number) {
        var displayImage: HTMLImageElement = document.getElementById('imageToShow-robotic') as HTMLImageElement;
        displayImage.src = imageList[idx];

        var levelGrade = document.getElementById('level-title-robotic')!;
        levelGrade.textContent = levelGradeList[idx] + " level (16 sessions)";

        var levelContentTitle1 = document.getElementById('level-content-title1-robotic')!;
        levelContentTitle1.textContent = "Level " + (1 + (idx * 4));
        var levelContentTitle2 = document.getElementById('level-content-title2-robotic')!;
        levelContentTitle2.textContent = "Level " + (2 + (idx * 4));
        var levelContentTitle3 = document.getElementById('level-content-title3-robotic')!;
        levelContentTitle3.textContent = "Level " + (3 + (idx * 4));
        var levelContentTitle4 = document.getElementById('level-content-title4-robotic')!;
        levelContentTitle4.textContent = "Level " + (4 + (idx * 4));


        var levelContentSubtitle1 = document.getElementById('level-content-subtitle1-robotic')!;
        levelContentSubtitle1.textContent = locContent[idx][0]['levelName'];
        var levelContentSubtitle2 = document.getElementById('level-content-subtitle2-robotic')!;
        levelContentSubtitle2.textContent = locContent[idx][1]['levelName'];
        var levelContentSubtitle3 = document.getElementById('level-content-subtitle3-robotic')!;
        levelContentSubtitle3.textContent = locContent[idx][2]['levelName'];
        var levelContentSubtitle4 = document.getElementById('level-content-subtitle4-robotic')!;
        levelContentSubtitle4.textContent = locContent[idx][3]['levelName'];

        if (idx == 0) {

            var price_content = document.getElementById('price-container-robotic')!;
            price_content.style.display = "flex";
            var price_content = document.getElementById('coming-soon-robotic')!;
            price_content.style.display = "none";

            var priceTitle = document.getElementById('price-title-robotic')!;
            priceTitle.textContent = priceList[idx]['title'];

            var price = document.getElementById('price-robotic')!;
            price.textContent = priceList[idx]['price'];

            var classType = document.getElementById('class-type-robotic')!;
            classType.textContent = priceList[idx]['level'];

            var classPrice = document.getElementById('price-only-robotic')!;
            classPrice.textContent = priceList[idx]['price-only'];

            var priceTag = document.getElementById('price-list1-robotic')!;
            priceTag.textContent = priceList[idx]['price-list1'];

            var priceTag2 = document.getElementById('price-list2-robotic')!;
            priceTag2.textContent = priceList[idx]['price-list2'];

            var shopLink = document.getElementById('nikola-maker-link-robotic')!;
            shopLink.textContent = priceList[idx]['nikola-maker-link'];

            var locationButton = document.getElementById('loc-ask-us-button-robotic')!;
            locationButton.textContent = priceList[idx]['loc-ask-us-button'];

            var registerButton = document.getElementById('register-button-robotic')!;
            registerButton.textContent = priceList[idx]['register-button'];
        } else {
            var price_content = document.getElementById('price-container-robotic')!;
            price_content.style.display = "none";
            var price_content = document.getElementById('coming-soon-robotic')!;
            price_content.style.display = "flex";
        }

    }

    return (
        <div className="roboticLOC-container">
            <div className="roboticLOC-title">
                Levels of Complexity
            </div>
            <div className="buttons-container-robotic">
                <a className='level-button-robotic'>
                    <button type="button" onClick={() => changeView(0)}>
                        Beginner Level
                    </button>
                </a>
                <a className='level-button-robotic' onClick={() => changeView(1)}>
                    <button type="button">
                        Intermediate Level
                    </button>
                </a>
                <a className='level-button-robotic' onClick={() => changeView(2)}>
                    <button type="button">
                        Advanced Level
                    </button>
                </a>
            </div>
            <div className="show-item-robotic">
                <div className="loc-item-container">
                    <img id="imageToShow-robotic" className="imageToShow-robotic"
                        src={loc1} alt="Logo" />
                </div>
                <div className="level-desc">
                    <div className="level-title-robotic" id="level-title-robotic">
                        Beginner level (16 Sessions)
                    </div>
                    <div className="level-subtitle-robotic">
                        The class will take 90 minutes per session.
                    </div>
                    <div id="level-content-title1-robotic" className="level-content-title1-robotic">
                        Level 1
                    </div>
                    <div id="level-content-subtitle1-robotic" className="level-content-subtitle1-robotic">
                        Science and Mechanics Adventures
                    </div>
                    <div id="level-content-title2-robotic" className="level-content-title2-robotic">
                        Level 2
                    </div>
                    <div id="level-content-subtitle2-robotic" className="level-content-subtitle2-robotic">
                        RoboBug with Microbit
                    </div>
                    <div id="level-content-title3-robotic" className="level-content-title3-robotic">
                        Level 3
                    </div>
                    <div id="level-content-subtitle3-robotic" className="level-content-subtitle3-robotic">
                        Basic Circuits with Microbit
                    </div>
                    <div id="level-content-title4-robotic" className="level-content-title4-robotic">
                        Level 4
                    </div>
                    <div id="level-content-subtitle4-robotic" className="level-content-subtitle4-robotic">
                        Omniwheel Robot with Microbit and Foundations of 3D Printing
                    </div>
                </div>
            </div>
            <div id="coming-soon-robotic" className="coming-soon-robotic">
                COMING SOON!
            </div>
            <div className="price-container" id="price-container-robotic">
                <div className="price-content" id="price-content">
                    <div className="price-title-robotic" id="price-title-robotic">
                        Robotics Basic
                    </div>
                    <div className="price-list1-container">
                        <div className="price-robotic" id="price-robotic">
                            Rp 3,840,000
                        </div>
                        <div className="class-type" id="class-type-robotic">
                            Beginner Level
                        </div>
                    </div>
                    <div className="price-list1-container">
                        <div className="price-list1" id="price-list1-robotic">
                            - Course Only
                        </div>
                        <div className="price-only-robotic" id="price-only-robotic">
                            Rp 2,800,000
                        </div>
                    </div>
                    <div className="price-list1-container">
                        <div className="price-list2" id="price-list2-robotic">
                            - Science Advanced Kit Add-ons
                        </div>
                        <Link className="nikola-maker-link-robotic" id="nikola-maker-link-robotic" to="">
                            Available on Nikola Maker Shop
                        </Link>
                    </div>
                    <div className="price-list1-container-buttons">
                        <a className='loc-ask-us-button' id='loc-ask-us-button-robotic' href='https://api.whatsapp.com/send/?phone=6281317321451&text&type=phone_number&app_absent=0' target="popup">
                            <button type="button" onClick={() => { }}>
                                Ask Us!
                            </button>
                        </a>
                        <a className='register-button' id='register-button' href='https://forms.gle/5c9mZDkQFCjNGeCR6' target="popup">
                            <button type="button" onClick={() => { }}>
                                Register Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RoboticLOC;

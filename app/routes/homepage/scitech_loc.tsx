import { Link } from "@remix-run/react/dist/components";
import React, { useState } from "react";
import loc1 from "~/assets/loc/loc_1.png";
import loc2 from "~/assets/loc/loc_2.png";
import loc3 from "~/assets/loc/loc_3.png";

interface SciTechLOC {
}
var imageToShow: string = loc1;
var imageList: string[] = [loc1, loc2, loc3];
var levelGradeList: string[] = ["Beginner", "Intermediate", "Advanced"];
var locContent = [
    [{
        "level": "Level 1",
        "levelName": "Science and Scratch Adventure"
    },
    {
        "level": "Level 2",
        "levelName": "Experiment with Microbit"
    },
    {
        "level": "Level 3",
        "levelName": "Automation with Microbit"
    },
    {
        "level": "Level 4",
        "levelName": "Science with Microbit"
    }],
    [{
        "level": "Level 5",
        "levelName": "Fundamentals of Python and 3D Design"
    },
    {
        "level": "Level 6",
        "levelName": "Basic Circuits and Arduino Projects using Ardublock"
    },
    {
        "level": "Level 7",
        "levelName": "Arduino IoT Projects"
    },
    {
        "level": "Level 8",
        "levelName": "Renewable Energy Exploration"
    }],
    [{
        "level": "Level 9",
        "levelName": "IoT Monitoring and Logging Systems"
    },
    {
        "level": "Level 10",
        "levelName": "IoT Smart Home Projects"
    },
    {
        "level": "Level 11",
        "levelName": "IoT Smart Garden Projects"
    },
    {
        "level": "Level 12",
        "levelName": "Advanced Science Investigation Projects"
    }],
];

var priceList = [
    {
        "title": "Science & Technology Basic",
        "price": "Rp 3,600,000",
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


function SciTechLOC({ }: SciTechLOC) {
    function changeView(idx: number) {
        var displayImage: HTMLImageElement = document.getElementById('imageToShow') as HTMLImageElement;
        displayImage.src = imageList[idx];

        var levelGrade = document.getElementById('level-title')!;
        levelGrade.textContent = levelGradeList[idx] + " level (16 sessions)";

        var levelContentTitle1 = document.getElementById('level-content-title1')!;
        levelContentTitle1.textContent = "Level " + (1 + (idx * 4));
        var levelContentTitle2 = document.getElementById('level-content-title2')!;
        levelContentTitle2.textContent = "Level " + (2 + (idx * 4));
        var levelContentTitle3 = document.getElementById('level-content-title3')!;
        levelContentTitle3.textContent = "Level " + (3 + (idx * 4));
        var levelContentTitle4 = document.getElementById('level-content-title4')!;
        levelContentTitle4.textContent = "Level " + (4 + (idx * 4));


        var levelContentSubtitle1 = document.getElementById('level-content-subtitle1')!;
        levelContentSubtitle1.textContent = locContent[idx][0]['levelName'];
        var levelContentSubtitle2 = document.getElementById('level-content-subtitle2')!;
        levelContentSubtitle2.textContent = locContent[idx][1]['levelName'];
        var levelContentSubtitle3 = document.getElementById('level-content-subtitle3')!;
        levelContentSubtitle3.textContent = locContent[idx][2]['levelName'];
        var levelContentSubtitle4 = document.getElementById('level-content-subtitle4')!;
        levelContentSubtitle4.textContent = locContent[idx][3]['levelName'];

        if (idx == 0) {
            var price_content = document.getElementById('price-container')!;
            price_content.style.display = "flex";
            var price_content = document.getElementById('coming-soon')!;
            price_content.style.display = "none";

            var priceTitle = document.getElementById('price-title')!;
            priceTitle.textContent = priceList[idx]['title'];

            var price = document.getElementById('price')!;
            price.textContent = priceList[idx]['price'];

            var classType = document.getElementById('class-type')!;
            classType.textContent = priceList[idx]['level'];

            var classPrice = document.getElementById('price-only')!;
            classPrice.textContent = priceList[idx]['price-only'];

            var priceTag = document.getElementById('price-list1')!;
            priceTag.textContent = priceList[idx]['price-list1'];

            var priceTag2 = document.getElementById('price-list2')!;
            priceTag2.textContent = priceList[idx]['price-list2'];

            var shopLink = document.getElementById('nikola-maker-link')!;
            shopLink.textContent = priceList[idx]['nikola-maker-link'];

            var locationButton = document.getElementById('loc-ask-us-button')!;
            locationButton.textContent = priceList[idx]['loc-ask-us-button'];

            var registerButton = document.getElementById('register-button')!;
            registerButton.textContent = priceList[idx]['register-button'];

        } else {
            var price_content = document.getElementById('price-container')!;
            price_content.style.display = "none";
            var price_content = document.getElementById('coming-soon')!;
            price_content.style.display = "flex";
        }

    }


    return (
        <div className="scitechLOC-container">
            <div className="scitechLOC-title">
                Levels of Complexity
            </div>
            <div className="buttons-container">
                <a className='level-button'>
                    <button type="button" onClick={() => changeView(0)}>
                        Beginner Level
                    </button>
                </a>
                <a className='level-button'>
                    <button type="button" onClick={() => changeView(1)}>
                        Intermediate Level
                    </button>
                </a>
                <a className='level-button'>
                    <button type="button" onClick={() => changeView(2)}>
                        Advanced Level
                    </button>
                </a>
            </div>
            <div className="show-item">
                <div className="loc-item-container">
                    <img className="imageToShow" id="imageToShow"
                        src={loc1} alt="Logo" />
                </div>
                <div className="level-desc">
                    <div className="level-title" id="level-title">
                        Beginner level (16 Sessions)
                    </div>
                    <div className="level-subtitle">
                        The class will take 90 minutes per session.
                    </div>
                    <div id="level-content-title1" className="level-content-title1">
                        Level 1
                    </div>
                    <div id="level-content-subtitle1" className="level-content-subtitle1">
                        Science and Scratch Adventures
                    </div>
                    <div id="level-content-title2" className="level-content-title2">
                        Level 2
                    </div>
                    <div id="level-content-subtitle2" className="level-content-subtitle2">
                        Experiment with Microbit
                    </div>
                    <div id="level-content-title3" className="level-content-title3">
                        Level 3
                    </div>
                    <div id="level-content-subtitle3" className="level-content-subtitle3">
                        Automation with Microbit
                    </div>
                    <div id="level-content-title4" className="level-content-title4">
                        Level 4
                    </div>
                    <div id="level-content-subtitle4" className="level-content-subtitle4">
                        Science with Microbit
                    </div>
                </div>
            </div>
            <div id = "coming-soon" className="coming-soon">
                COMING SOON!
            </div>
            <div className="price-container" id="price-container">
                <div className="price-content" id="price-content">
                    <div className="price-title" id="price-title">
                        Science & Technology Basic
                    </div>
                    <div className="price-list1-container">
                        <div className="price" id="price">
                            Rp 3,600,000
                        </div>
                        <div className="class-type" id="class-type">
                            Beginner Level
                        </div>
                    </div>
                    <div className="price-list1-container">
                        <div className="price-list1" id="price-list1">
                            - Course Only
                        </div>
                        <div className="price-only" id="price-only">
                            Rp 2,800,000
                        </div>
                    </div>
                    <div className="price-list1-container">
                        <div className="price-list2" id="price-list2">
                            - Science Advanced Kit Add-ons
                        </div>
                        <Link className="nikola-maker-link" id="nikola-maker-link" to="">
                            Available on Nikola Maker Shop
                        </Link>
                    </div>
                    <div className="price-list1-container-buttons">
                        <a className='loc-ask-us-button' id='loc-ask-us-button' href='https://api.whatsapp.com/send/?phone=6281317321451&text&type=phone_number&app_absent=0' target="popup">
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

export default SciTechLOC;

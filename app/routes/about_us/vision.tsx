import tesla from "~/assets/tesla.png"
import { TbAtom } from "react-icons/tb";
import { TbMoodKid } from "react-icons/tb";
import { GoBook } from "react-icons/go";
import { MdOutlineScience } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";

interface Vision {
}


function Vision({ }: Vision) {
    return (
        <div className="vision-container">
            <div className="our-vision">
                <div className="vision-title">
                    Our Vision
                </div>
                <div className="vision">
                    Our vision is to enhance the number of discoverers, inventors, and innovators in the world through agile interdisciplinary education.
                </div>
            </div>
            <div className="our-mission">
                <div className="mission-title">
                    How We Get There
                </div>
                <div className="row">
                    <div className="icon-container">
                        <TbAtom color="#292929" size={"2vw"} />
                    </div>
                    <div className="icon-container">
                        <GoBook color="#292929" size={"2vw"} />
                    </div>
                </div>
                <div className="row-text">
                    <div className="text-mission">
                        Instill passion for Science and Technology through innovative education and project-based learning.
                    </div>
                    <div className="text-mission">
                        Emphasize the development of fundamental knowledge and practical skills.
                    </div>
                </div>
                <div className="row">
                    <div className="icon-container">
                        <IoSchoolOutline color="#292929" size={"2vw"} />
                    </div>
                    <div className="icon-container">
                        <TbMoodKid color="#292929" size={"2vw"} />
                    </div>
                </div>
                <div className="row-text">
                    <div className="text-mission">
                        Encourage collaborative partnerships with various organizations, schools, and universities.
                    </div>
                    <div className="text-mission">
                        Cultivate the spirit of invention, innovation, and discovery of children from a young age.
                    </div>
                </div>
                <div className="row">
                    <div className="icon-container">
                        <MdOutlineScience color="#292929" size={"2vw"} />
                    </div>
                </div>
                <div className="row-text">
                    <div className="text-mission">
                        Empower students to explore scientific phenomena, integrate systems, and pioneer new technologies.
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Vision;

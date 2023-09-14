import courses from "~/assets/robotic_course.png"

interface RoboticCourses {
}

function clickMe() {
    alert("You clicked me!");
}

function RoboticCourses({ }: RoboticCourses) {
    return (
        <div className="robotic-courses-container">
            <div className="robotic-courses-content-container">
                <div className="robotic-courses-image-container">
                    <img className="robotic-image"
                        src={courses} alt="courses" width={"50%"} />
                </div>
                <div className="content-robotic">
                    <div className="misc-label-robotic">
                        Nikola Academy Course
                    </div>
                    <div className="course-title-robotic">
                        Robotics
                    </div>
                    <div className="course-subtitle-robotic">
                        This course will embark on a journey of comprehensive exploration. Discover the art of building, programming, and innovating robotic systems, all while unraveling the sophisticated mechanics behind their functions. From crafting mechanisms to sculpting behaviors through coding, students will delve deep into the core of robotics, shaping the future of technological advancement.
                    </div>
                </div>
                <div className="all-skills">
                    <div className="skill-container1-robotic">
                        <div className="skill-robotic">
                            Hands-on Engineering
                        </div>
                        <div className="skill-robotic">
                            Robocar
                        </div>
                        <div className="skill-robotic">
                            Collaborative Robots
                        </div>
                        <div className="skill-robotic">
                            Bipedal Robots
                        </div>
                        <div className="skill-robotic">
                            Quadrupedal Robots
                        </div>
                    </div>
                    <div className="skill-container2-robotic">
                        <div className="skill-robotic">
                            Block Programming
                        </div>
                        <div className="skill-robotic">
                            Computer Vision
                        </div>
                        <div className="skill-robotic">
                            Machine Learning
                        </div>
                        <div className="skill-robotic">
                            Drone
                        </div>
                        <div className="skill-robotic">
                            3D Printing
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default RoboticCourses;

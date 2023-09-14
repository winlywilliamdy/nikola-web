import courses from "~/assets/courses.png"

interface ScitechCourses {
}

function clickMe() {
    alert("You clicked me!");
}

function ScitechCourses({ }: ScitechCourses) {
    return (
        <div className="courses-container">
            <div className="courses-title">
                Available Courses
            </div>
            <div className="scitech-course-content-container">
                <div className="courses-image-container">
                    <img className="scitech-image"
                        src={courses} alt="courses" />
                </div>
                <div className="content-blue">
                    <div className="misc-label">
                        Nikola Academy Course
                    </div>
                    <div className="course-title">
                        Science & Technology
                    </div>
                    <div className="course-subtitle">
                        This course will unveil the dynamic synergy between technology and scientific principles.
                        Immerse yourself in the captivating realm of designing and developing interconnected systems.
                        Unleash your potential to craft innovative solutions that create meaningful impacts in the real world!
                    </div>
                </div>
                <div className="all-skills">
                    <div className="skill-container1">
                        <div className="skill">
                            Hands-on Science
                        </div>
                        <div className="skill">
                            Scientific Measurement
                        </div>
                        <div className="skill">
                            Smart Home and IoT
                        </div>
                        <div className="skill">
                            Automation
                        </div>
                        <div className="skill">
                            Appliances
                        </div>
                    </div>
                    <div className="skill-container2">
                        <div className="skill">
                            3D-Printing
                        </div>
                        <div className="skill">
                            Data Science & Analysis
                        </div>
                        <div className="skill">
                            Renewable Energy
                        </div>
                        <div className="skill">
                            Block Programming
                        </div>
                        <div className="skill">
                            Python & HTML
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ScitechCourses;

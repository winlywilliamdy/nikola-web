import goals from "~/assets/goals.png"

interface OurGoals {
}

function clickMe() {
    alert("You clicked me!");
}

function OurGoals({ }: OurGoals) {
    return (
        <div className="goals-container">
            <div className="goals-title">
                Our Goals
            </div>
            <div className="goals-image-container">
                <img className="goals-image"
                    src={goals} alt="goals" />
            </div>
            <div className="subheading1-container">
                <div className="subheading1">
                    Nikola Robotics
                </div>
                <div className="content1">
                    We offer an educational experience aimed at inspiring and cultivating <b>future roboticists </b>who are involved in designing, programming, constructing and testing robots.
                </div>
            </div>
            <div className="subheading2-container">
                <div className="subheading2">
                    Nikola Science & Technology
                </div>
                <div className="content2">
                    We foster the <b>future scientists and engineers</b> by providing an educational experience in quantitative measurement, adeptly assessing scientific phenomena, and mastering the integration of software and hardware to tackle complex problems.
                </div>
            </div>
        </div >
    );
}

export default OurGoals;

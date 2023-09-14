import { TbMap } from "react-icons/tb";
import { TbTrendingUp } from "react-icons/tb";
import { TbMapPin } from "react-icons/tb";
import { TbEye } from "react-icons/tb";
import mascot from "~/assets/mascot.png"

interface JoinUs {
}

function JoinUs({ }: JoinUs) {
    return (
        <div className="banner-container">
            <div className="join-us-banner">
                Join Nikola Academy Now!
            </div>
            <div className="join-steps">
                <div className="steps">
                    <div className="icon-container">
                        <TbMap className="icon" color="#292929" size={'5vh'}/>
                    </div>
                    Inquiry
                    <div className="step-subtitle">
                        Click on the Brochure or Contact Form button for additional information. We are more than happy to address your inquiries!
                    </div>
                </div>
                <div className="steps">
                    <div className="icon-container">
                        <TbTrendingUp className="icon" color="#292929"size={'5vh'}/>
                    </div>
                    Form Submission
                    <div className="step-subtitle">
                        Please complete the form with your child's information, as this data is essential for us to determine their appropriate placement level.
                    </div>
                </div>
                <div className="steps">
                    <div className="icon-container">
                        <TbMapPin className="icon" color="#292929"size={'5vh'}/>
                    </div>
                    Free Trial
                    <div className="step-subtitle">
                        We will contact you regarding the trial schedule, during which our teachers will collaborate with the students to determine the ideal starting level.
                    </div>
                </div>
                <div className="steps">
                    <div className="icon-container">
                        <TbEye className="icon" color="#292929"size={'5vh'}/>
                    </div>
                    Payment and Agreement
                    <div className="step-subtitle">
                        We will thoroughly discuss and clarify all aspects of our class with parents. This ensures that parents' expectations for their children are met.
                    </div>
                </div>
            </div>
            <img className="mascot"
                src={mascot}  />
        </div >
    );
}

export default JoinUs;

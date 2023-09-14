import tesla from "~/assets/tesla.png"

interface NikolaTesla {
}

function clickMe() {
    alert("You clicked me!");
}

function NikolaTesla({ }: NikolaTesla) {
    return (
        <div className="nikola-container">
            <div className="nikola-image-container">
                <img className="nikola-image"
                    src={tesla} alt="Nikola Tesla" width={"70%"} />
                <div className="nikola-profile">
                    <div className="nikola-name">
                        Nikola Tesla
                    </div><div className="nikola-dob">
                        Croatia, July 10th ,1856
                    </div><div className="nikola-role">
                        Inventor, Electrical Engineer, Mechanical Engineer
                    </div>
                </div>
            </div>
            <div className="text-content-nikola">
                <div className="nikola-title">
                    Nikola Academy
                </div>
                <div className="nikola-content">
                    Nikola Academy is an after school program that provide children to nurture their passion in robotics, science and technology to tackle real-life problems. Through a comprehensive interdisciplinary science curriculum, we are dedicated to empowering young aspiring roboticists and scientists to become inventors, innovators, and creative thinkers.
                    <br></br>
                    <br></br>
                    As of we envisioned to grow together with the future roboticist and scientist, we draw inspiration from the great inventor and electrical innovator, Nikola Tesla. His strong ambition, resilience, motivation and inquisitive mind continue to aspire us.
                    <br></br>
                    <br></br>
                    Nikola Tesla was a highly respected inventor, and we hold great appreciation for his work. We aspire to carry on his legacy by educating and inspiring the younger generation.
                    <br></br>
                    <br></br>
                    At Nikola Academy, we firmly believe that education is the most valuable gift we can give our children to ensure a brighter future for generations to come.
                </div>
            </div>


        </div >
    );
}

export default NikolaTesla;

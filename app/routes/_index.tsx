import type { LinksFunction, V2_MetaFunction } from "@remix-run/node";
import Header from "./homepage/header";
import Banner from "./homepage/banner";
import Slideshow from "./homepage/banner_slideshow";
import OurGoals from "./homepage/our_goals";
import SciTechLOC from "./homepage/scitech_loc";
import RoboticLOC from "./homepage/robotic_loc";
import ScitechCourses from "./homepage/courses_scitech";
import RoboticCourses from "./homepage/courses_robotic";
import JoinUs from "./homepage/join";
import Footer from "./homepage/footer";
import Copyright from "./homepage/copyright";
import ContactUs from "./homepage/contact_us";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Nikola Academy" },
    { name: "Discover, Innovate, Invent", content: "Investing on future generation of all-rounded scientist, innovators, and inventors through comprehensive STEM learning" },
  ];
};

export default function HomePage() {
  return (
    <div>
      <Header/>
      <Banner/>
      <Slideshow/>
      <OurGoals/>
      <ScitechCourses/>
      <SciTechLOC/>
      <RoboticCourses/>
      <RoboticLOC/>
      <JoinUs/>
      <Footer/>
      <Copyright/>
      <ContactUs/>
    </div>
  );
}

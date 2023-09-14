import { V2_MetaFunction } from "@remix-run/react/dist/routeModules";
import Header from "./homepage/header";
import Footer from "./homepage/footer";
import Copyright from "./homepage/copyright";
import SlideshowAboutUs from "./about_us/slideshow_aboutus";
import NikolaTesla from "./about_us/nikola_tesla";
import Vision from "./about_us/vision";


export const meta: V2_MetaFunction = () => {
  return [
    { title: "Nikola Academy" },
    { name: "Nikola Academy is committed to provide high-quality education in science, technology, and robotics. Our team of experienced and skilled roboticists, scientists, and engineers work together to create a fun, challenging, and engaging learning environment.", content: "Investing on future generation of all-rounded scientist, innovators, and inventors through comprehensive STEM learning" },
  ];
};

export default function About() {
  return (
    <>
      <Header />
      <SlideshowAboutUs />
      <NikolaTesla />
      <Vision />
      <Footer />
      <Copyright />
    </>
  );
}

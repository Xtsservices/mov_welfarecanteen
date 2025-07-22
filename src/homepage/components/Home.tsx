
import styled from "styled-components";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider"; // ✅ Replace this
import AboutSection from "../components/AboutSection"; // Ensure this is the correct path and component
import ServicesSection from "../components/ServicesSection";
// import ReachAndTestimonials from "./ReachAndTestimonials";
import ContactAndEnquiry from "../components/ContactAndEnquiry";
import GallerySection from "../components/GallerySection";
import Header from "./Header";
import OverviewSection from "../components/Overviewsection";


const HomeContainer = styled.div`
  font-family: sans-serif;
  // marginTop: 200px
`;

const Home = () => {

  return (
    <section id="home">
    <HomeContainer>
      <Header/>
      <Navbar /> 
      <HeroSlider /> 
      <OverviewSection/>
      <AboutSection /> 
      <ServicesSection />
      {/* <ReachAndTestimonials /> */}
      <GallerySection />
      <ContactAndEnquiry />
    </HomeContainer>
    </section>
  );
}

export default Home;

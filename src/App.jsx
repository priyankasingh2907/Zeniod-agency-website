import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";
// import ScrollToTop from "./Components/ScrollToTop";
import Client from "./Components/Client";
import Footer from "./Components/Footer";
import Milestone from "./Components/Milestone";

export default function App() {
  return (
    <Main>
      {/* <ScrollToTop /> */}
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Milestone />
      <Client />
      <Footer />
    </Main>
  );
}

const Main = styled.main``;

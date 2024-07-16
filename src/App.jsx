import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Services from "./Components/Services";

export default function App() {
  return (
    <Main>
      <Navbar />
      <Hero />
      <About />
      <Services />
    </Main>
  );
}

const Main = styled.main``;

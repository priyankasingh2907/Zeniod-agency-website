import styled from "styled-components";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";

export default function App() {
  return (
    <Main>
      <Navbar />
      <Hero />
      <About />
    </Main>
  );
}

const Main = styled.main``;

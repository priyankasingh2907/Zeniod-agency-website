import styled from "styled-components";
import logo from "../assets/logo.png";

export default function ScrollToTop() {
  const scrollToTop = document.querySelector(".scrollToTop");
window.addEventListener("scroll", () => {
    window.pageXOffset > 400 ?
        (scrollToTop.computedStyleMap.display = "block") :
        (scrollToTop.style.display = "none");
});
scrollToTop.addEventListener("click", () => {
    window.scroll({ top: 0 });
});

  return (
    <Section>
      {" "}
      <section className="scrollToTop">
        <img src={logo} alt="" />
      </section>
    </Section>
  );
}
const Section = styled.span`
  .scrollToTop {
    display: none;
    position: fixed;
    bottom: 5vh;
    right: 3vw;
    z-index: 1;
    background-color: black;
    padding: 1rem;
    border-radius: 3rem 3rem;
    cursor: pointer;
    img {
      height: 6vh;
    }
  }
`;

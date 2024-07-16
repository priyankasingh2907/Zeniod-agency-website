import styled from "styled-components";
import aboutImage1 from "../assets/aboutImage1.jpg";
import AaboutImage2 from "../assets/aboutImage2.jpg";
// import ScrollReveal from "scroll-reveal-react";
// import { useEffect } from "react";

export default function About() {
  // useEffect(() => {
  //   ScrollReveal().reveal(`.about__images`, {
  //     origin: "left",
  //     distance: "500px",
  //     duration: 1000,
  //     opacity: 0,
  //     reset: false,
  //   });

  //   ScrollReveal().reveal(`.about__content__container`, {
  //     origin: "right",
  //     distance: "500px",
  //     duration: 1000,
  //     opacity: 0,
  //     reset: false,
  //   });
  // }, []);
  return (
    <Section>
      {" "}
      <div className="section about semiDark" id="about">
        <div className="about__images">
          <img src={aboutImage1} alt="" />
          <img src={AaboutImage2} alt="" />
        </div>
        <div className="about__content__container">
          <h2 className="about__title">Refreshingly Unique Company About.</h2>
          <p className="about__info">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean.
          </p>
          <p className="about__info">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences
          </p>
          <div href="#" className="about__link">
            <span>Learn More</span>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  .about {
    display: grid;
    grid-template-columns: 50% 50%;
    padding-left: 20vw;
    padding-right: 10vw;
    .about__images {
      position: relative;
      img {
        height: 60vh;
        z-index: 2;
        position: absolute;
        &:nth-of-type(2) {
          width: 20vw;
          left: -2vw;
          bottom: 10vh;
          z-index: 1;
        }
      }
    }
    .about__content__container {
      display: grid;
      gap: 6vh;

      .about__title {
        color: white;
        margin-right: 3vw;
      }
      .about__info {
        color: #999797c1;
        line-height: 3.5vh;
      }
      .about__link {
        span {
          background: #ee0979; /* fallback for old browsers */
          background: -webkit-linear-gradient(
            to right,
            #ff6a00,
            #ee0979
          ); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(
            to right,
            #ff6a00,
            #ee0979
          ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
          background-clip: text;
          font-size: 1.4vw;
          letter-spacing: 0.1vw;
        }
        width: max-content;
        display: inline-block;
        padding-bottom: 1rem;
        background: linear-gradient(to right, #ff6a00, #ee0979) left bottom /
          var(--d, 20%) 3px no-repeat;
        transition: 0.2s;
        &:hover {
          --d: 100%;
        }
      }
    }
  }
`;

import styled from "styled-components";
import trophy from "../assets/trophy.svg";
import code from "../assets/code-branch.svg";
import brain from "../assets/brain.svg";
// import ScrollReveal from "scroll-reveal-react";
// import { useEffect } from "react";

export default function Hero() {
  // useEffect(() => {
  //   ScrollReveal().reveal(".hero__title", {
  //     opacity: 0,
  //     delay: 300,
  //     duration: 700,
  //     reset: false,
  //   });

  //   ScrollReveal().reveal(`#hs1,#hs2,#hs3`, {
  //     origin: "bottom",
  //     distance: "800px",
  //     duration: 1000,
  //     opacity: 0,
  //     reset: false,
  //   });
  // }, []);
  return (
    <Section>
      <div className="section hero dark" id="home">
        <div className="hero__title__container">
          <div className="hero__title">
            <h1>Design Driven Development of your Products.</h1>
          </div>
        </div>
        <div className="hero__service__container">
          <div className="hero__service" id="hs1">
            <div className="hero__service__logo">
              <img src={trophy} alt="" />
            </div>
            <h3 className="hero__service__title">Awarded Design</h3>
            <div className="hero__service__text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="hero__service" id="hs2">
            <div className="hero__service__logo">
              <img src={brain} alt="" />
            </div>
            <h3 className="hero__service__title">Design & Creative</h3>
            <div className="hero__service__text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
          <div className="hero__service" id="hs3">
            <div className="hero__service__logo">
              <img src={code} alt="" />
            </div>
            <h3 className="hero__service__title">App Development</h3>
            <div className="hero__service__text">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

const Section = styled.section`
  .dark {
    background-color: #101010;
  }

  .semiDark {
    background-color: #191919;
  }
  .section {
    padding: 18vh 10vw;
    .section_title_container {
      text-align: center;
      .section_subTitle {
        h5 {
          background: #ee0970;
          background: -webkit-linear-gradient(to right, #ff6a00, #ee0970);
          background: linear-gradient(to right, #ff6a00, #ee0970);
          -webkit-text-fill-color: transparent;
          -webkit-background-clip: text;
        }
      }
      .section_title {
        h2 {
          color: white;
        }
      }
      .section_info {
        p {
          color: #757575;
        }
      }
    }
  }
  .hero {
    display: grid;
    gap: 4vw;
    .hero__title__container {
      .hero__title {
        text-align: center;
        h1 {
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
        }
      }
    }
    .hero__service__container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      text-align: center;
      gap: 10vw;
      .hero__service {
        display: grid;
        gap: 0.3rem;
        .hero__service__logo {
          img {
            width: 5vw;
          }
        }
        .hero__service__title {
          color: white;
        }
        .hero__service__text {
          color: #757575;
          padding: 0 2rem;
        }
      }
    }
  }
`;

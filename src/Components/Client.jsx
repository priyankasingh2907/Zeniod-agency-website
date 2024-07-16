import styled from "styled-components";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import brand7 from "../assets/brand7.png";
import brand8 from "../assets/brand8.png";
import brand9 from "../assets/brand9.png";
import brand10 from "../assets/brand10.png";
// import ScrollReveal from "scroll-reveal-react";
// import { useEffect } from "react";

export default function Client() {
  // useEffect(() => {
  //   for (let i = 1; i <= 10; i++)
  //     ScrollReveal().reveal(`#c${i}`, {
  //         origin: i < 6 ? "right" : "left",
  //         distance: "500px",
  //         duration: 1500,
  //         opacity: 0,
  //         reset: false,
  //     });
      
  //   ScrollReveal().reveal(`.section__title__container`, {
  //     duration: 1500,
  //     opacity: 0,
  //     reset: false,
  // })
  // }, []);
  return (
    <Section>
      <div className="section clients dark" id="clients">
        <div className="section__title__container">
          <div className="section__subTitle">
            <h5>Top clients</h5>
          </div>
          <div className="section__title">
            <h2>We Worked with brands.</h2>
          </div>
        </div>
        <div className="clients__container">
          <div className="client" id="c1">
            <img src={brand1} alt="" />
          </div>
          <div className="client" id="c2">
            <img src={brand2} alt="" />
          </div>
          <div className="client" id="c3">
            <img src={brand8} alt="" />
          </div>
          <div className="client" id="c4">
            <img src={brand4} alt="" />
          </div>
          <div className="client" id="c5">
            <img src={brand5} alt="" />
          </div>
          <div className="client" id="c6">
            <img src={brand6} alt="" />
          </div>
          <div className="client" id="c7">
            <img src={brand7} alt="" />
          </div>
          <div className="client" id="c8">
            <img src={brand3} alt="" />
          </div>
          <div className="client" id="c9">
            <img src={brand9} alt="" />
          </div>
          <div className="client" id="c10">
            <img src={brand10} alt="" />
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
    .section__title__container {
      text-align: center;
      .section__subTitle {
        h5 {
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
        }
      }
      .section__title {
        h2 {
          color: white;
        }
      }
      .section__info {
        p {
          color: #757575;
        }
      }
    }
  }

  .clients {
    display: grid;
    gap: 8vw;
    .clients__container {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 5vw;
      .client {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          height: 5vh;
          transition: 0.3s ease-in-out;
          cursor: pointer;
          &:hover {
            transform: scale(1.6);
            overflow: hidden;
            max-height: 5vh;
          }
        }
      }
    }
  }
`;

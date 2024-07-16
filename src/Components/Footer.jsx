import styled from "styled-components";
import logo from "../assets/logo.png";
import facebook from "../assets/facebook-f.svg";
import instagram from "../assets/instagram.svg";
import linedIn from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";
// import ScrollReveal from "scroll-reveal-react";
// import { useEffect } from "react";

export default function Footer() {
  // useEffect(() => {
  //   ScrollReveal().reveal(`.footer__read`, {
  //     origin: "top",
  //     distance: "500px",
  //     duration: 1000,
  //     opacity: 0,
  //     reset: false,
  //   });
  //   ScrollReveal().reveal(`.footer__content`, {
  //     origin: "bottom",
  //     distance: "500px",
  //     duration: 1000,
  //     opacity: 0,
  //     reset: false,
  //   });
  // }, []);
  return (
    <FooterSection>
      <footer className="section">
        <div className="footer__read">
          <h2>Enough Talk, Let Build Something Together</h2>
          <button>Read out Now</button>
        </div>
        <div className="footer__content">
          <div className="footer__brand">
            <div className="footer__logo">
              <img src={logo} alt="" />
              <h3>Zenoid</h3>
            </div>
            <div className="footer__copyright">
              <p>
                Copyright &#169; 2021 Zenoid Digital Agency. All Rights
                Reserved.
              </p>
            </div>
          </div>
          <div className="footer__links">
            <h3>Quick Links</h3>
            <ul>
              <li>Portfolio</li>
              <li>About</li>
              <li>Our Blog</li>
              <li>Our Team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__links">
            <h3>Company</h3>
            <ul>
              <li>Portdolio</li>
              <li>About</li>
              <li>Our Blog</li>
              <li>Our Team</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer__links">
            <h3>Say Hello</h3>
            <ul>
              <li>Email: admin@zenoid.tech</li>
              <li>Address: Zenoid Estate, Zenoid</li>
              <li>Phone: 898981231123</li>
            </ul>
            <ul className="footer__social__links">
              <li>
                <img src={facebook} alt="" />
              </li>
              <li>
                <img src={instagram} alt="" />
              </li>
              <li>
                <img src={linedIn} alt="" />
              </li>
              <li>
                <img src={twitter} alt="" />
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </FooterSection>
  );
}

const FooterSection = styled.footer`
  footer {
    background-color: #191919 !important;
    .footer__read {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-bottom: 4vw;
      border-bottom: 0.01rem solid #757575;
      h2 {
        color: white;
        font-size: 2.8vw;
        width: 50%;
      }
      button {
        padding: 4vh 4vw;
        border-radius: 3vw;
        font-family: "Rubik", sans-serif;
        font-size: 1.4rem;
        background: transparent;
        border: #757575 1px solid;
        color: white;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &:hover {
          background: linear-gradient(to right, #ff6a00, #ee0979);
          border-color: #ff6a00;
        }
      }
    }

    .footer__content {
      display: grid;
      grid-template-columns: 1.5fr 1fr 1fr 1fr;
      color: white;
      padding-top: 4vw;
      gap: 2vw;
      .footer__brand {
        display: flex;
        flex-direction: column;
        gap: 2vw;
        .footer__logo {
          display: flex;
          align-items: center;
          gap: 1vw;
          h3 {
            text-transform: uppercase;
            letter-spacing: 0.3vw;
          }
          img {
            background-color: black;
            height: 16vh;
            padding: 4vh;
            border-radius: 10vw;
          }
        }
        .footer__copyright {
          p {
            color: #757575;
            letter-spacing: 0.1vw;
            line-height: 4vh;
          }
        }
      }
      .footer__links {
        h3 {
          margin-bottom: 4vh;
        }
        ul {
          display: inline-block;
          li {
            margin-bottom: 2vh;
            list-style: none;
            font-size: 1.2vw;
            cursor: pointer;
            padding-bottom: 1vh;
            color: #757575;
            background: linear-gradient(to right, #ff6a00, #ee0979) left bottom /
              var(--d, 0%) 3px no-repeat;
            transition: 0.4s;
            &:hover {
              color: #ff6a00;
              --d: 100%;
            }
          }
        }
        .footer__social__links {
          display: flex;
          gap: 2vw;
          margin-top: 3vh;
          img {
            height: 4vh;
            svg {
              color: white;
            }
          }
        }
      }
    }
  }
`;

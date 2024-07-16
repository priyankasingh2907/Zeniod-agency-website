import styled from "styled-components";
import logo from "../assets/logo.png";
import slider from "../assets/sliders-v-alt.svg";

export default function Navbar() {
  return (
    <Nav>
      <div className="nav__brand">
        <img src={logo} alt="" />
        <h3>Zenoid</h3>
      </div>
      <div className="responsive__toggle">
        <img src={slider} alt="" />
      </div>
      <div className="nav__links">
        <ul>
          <li>
            <a href="#home"> Home</a>
          </li>
          <li>
            <a href="#about"> About</a>
          </li>
          <li>
            <a href="#services"> Services</a>
          </li>
          <li>
            <a href="#milestones"> Milestones</a>
          </li>
          <li>
            <a href="#clients"> Clients</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
}

const Nav = styled.nav`
  background-color: #101010;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vh 2vw 0 2vw;
  .nav__brand {
    display: flex;
    align-items: center;
    gap: 1vw;
    h3 {
      text-transform: uppercase;
      letter-spacing: 0.3vw;
      color: white;
    }
    img {
      height: 10vh;
    }
  }
  .responsive__toggle {
    display: none;
  }
  .nav__links {
    color: white;
    ul {
      display: flex;
      list-style-type: none;
      li {
        a {
          color: white;
          text-decoration: none;
          &:hover {
            color: #ff6a00;
          }
        }
        margin: 0 2vw;
        font-size: 2.5vh;
        cursor: pointer;
      }
    }
  }
`;

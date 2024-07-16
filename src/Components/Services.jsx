import copy from "../assets/copy.svg";
import envelope from "../assets/envelope-alt.svg";
import mobile from "../assets/mobile-android.svg";
import layer from "../assets/layer-group.svg";
import desktop from "../assets/desktop.svg";
import user from "../assets/users-alt.svg";
// import { useEffect } from "react";
// import ScrollReveal from "scroll-reveal-react";

export default function Services() {
  // useEffect(() => {
  //   for (let i = 1; i <= 6; i++)
  //     ScrollReveal().reveal(`#sv${i}`, {
  //       duration: 1000,
  //       scale: 0,
  //       reset: false,
  //       delay: 300 + i * 200,
  //     });
      
  //   ScrollReveal().reveal(`.section__title__container`, {
  //     duration: 1500,
  //     opacity: 0,
  //     reset: false,
  // })
  // }, []);
  return (
    <div className="section services dark" id="services">
      <div className="section__title__container">
        <div className="section__subTitle">
          <h5>What we can do for you ?</h5>
        </div>
        <div className="section__title">
          <h2>Services provided by us</h2>
        </div>
        <div className="section__info">
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration.
          </p>
        </div>
      </div>
      <div className="services__container">
        <div className="service" id="sv1">
          <div className="service__logo">
            <img src={desktop} alt="" />
          </div>
          <h3 className="service__title">Business Stratergy</h3>
          <p className="service__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            laborum.
          </p>
        </div>
        <div className="service" id="sv2">
          <div className="service__logo">
            <img src={layer} alt="" />
          </div>
          <h3 className="service__title">Website Development</h3>
          <p className="service__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            laborum.
          </p>
        </div>
        <div className="service" id="sv3">
          <div className="service__logo">
            <img src={user} alt="" />
          </div>
          <h3 className="service__title">Marketing & Reporting</h3>
          <p className="service__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            laborum.
          </p>
        </div>
        <div className="service" id="sv4">
          <div className="service__logo">
            <img src={mobile} alt="" />
          </div>
          <h3 className="service__title">Mobile Development</h3>
          <p className="service__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            laborum.
          </p>
        </div>
        <div className="service" id="sv5">
          <div className="service__logo">
            <img src={envelope} alt="" />
          </div>
          <h3 className="service__title">Email Marketing</h3>
          <p className="service__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            laborum.
          </p>
        </div>
        <div className="service" id="sv6">
          <div className="service__logo">
            <img src={copy} alt="" />
          </div>
          <h3 className="service__title">Copywriting</h3>
          <p className="service__info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            laborum.
          </p>
        </div>
      </div>
    </div>
  );
}

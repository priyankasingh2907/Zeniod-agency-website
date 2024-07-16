import styled from "styled-components";
import heart from "../assets/heart.svg";
import check from "../assets/check-circle.svg";
import award from "../assets/award.svg";
import clock from "../assets/clock.svg";
// import ScrollReveal from "scroll-reveal-react";
// import { useEffect } from "react";
// import $ from "jquery";

export default function Milestone() {
  // useEffect(() => {
  //   for (let i = 1; i <= 4; i++)
  //     ScrollReveal().reveal(`#ms${i}`, {
  //       duration: 1000,
  //       scale: 0,
  //       reset: false,
  //       delay: 300 + i * 200,
  //     });

  //   ScrollReveal().reveal(`.section__title__container`, {
  //     duration: 1500,
  //     opacity: 0,
  //     reset: false,
  //   });
  // const observer = new IntersectionObserver(
  //   function (entries) {
  //     if (entries[0].isIntersecting === true) startMilestonesCount();
  //   },
  //   { threshold: [0.5] }
  // );
  // let isMilestonesLoaded = false;

  // observer.observe(document.querySelector(".milestones__container"));
  // const startMilestonesCount = () => {
  //   if (!isMilestonesLoaded) {
  //     isMilestonesLoaded = true;
  //     $(".milestone__number").each(function () {
  //       $(this)
  //         .prop("Counter", 0)
  //         .animate(
  //           {
  //             Counter: $(this).text(),
  //           },
  //           {
  //             duration: 4000,
  //             easing: "swing",
  //             step: function (now) {
  //               $(this).text(Math.ceil(now));
  //             },
  //           }
  //         );
  //     });
  //   }
  // };
  // }, []);

  return (
    <Section>
      <div className="section milestones semiDark" id="milestones">
        <div className="section__title__container">
          <div className="section__subTitle">
            <h5>Lets talk about our figures</h5>
          </div>
          <div className="section__title">
            <h2>Growth of Zenoid</h2>
          </div>
          <div className="section__info">
            <p>We have grown immensely in the past 10 years.</p>
          </div>
        </div>
        <div className="milestones__container">
          <div className="milestone" id="ms1">
            <div className="milestone__icon">
              <img src={heart} alt="" />
            </div>
            <h2 className="milestone__number">199</h2>
            <p className="milestone__info">Satisfied Customers</p>
          </div>
          <div className="milestone" id="ms2">
            <div className="milestone__icon">
              <img src={clock} alt="" />
            </div>
            <h2 className="milestone__number">575</h2>
            <p className="milestone__info">Days of operations</p>
          </div>
          <div className="milestone" id="ms3">
            <div className="milestone__icon">
              <img src={check} alt="" />
            </div>
            <h2 className="milestone__number">49</h2>
            <p className="milestone__info">Completed Projects</p>
          </div>
          <div className="milestone" id="ms4">
            <div className="milestone__icon">
              <img src={award} alt="" />
            </div>
            <h2 className="milestone__number">55</h2>
            <p className="milestone__info">Awards Won</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
const Section = styled.section`
  .milestones {
    display: grid;
    gap: 4vw;

    .milestones__container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 5vh;
      .milestone {
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 2vh;
        background-color: black;
        padding: 2.5vw;
        border-radius: 1rem;
        transition: 0.3s ease-in-out;
        &:hover {
          box-shadow: rgba(161, 12, 117, 0.534) 0px 2px 4px 0px,
            rgba(18, 79, 105, 0.829) 0px 2px 16px 0px;

          transform: translateY(-10px);
        }
        .milestone__icon {
          img {
            height: 8vh;
          }
        }
        .milestone__number {
          color: white;
        }
        .milestone__info {
          color: #3d3c3c;
        }
      }
    }
  }
`;

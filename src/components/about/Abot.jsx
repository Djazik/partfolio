import React from "react";
import "./about.css";
import About from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const Abot = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={About} className="about__img" alt="" />
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              {" "}
              I am Aziz, web developer from Tashkent, Uzbekistan. I have rich
              experience in web site building and customization, also I am good
              at WordPress.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>
          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <span className="skills__number ">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <span className="skills__number ">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage photography"></span>
              </div>
            </div>


          </div>
        </div>
      </div>

      <AboutBox/>
    </section>
  );
};

export default Abot;

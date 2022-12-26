import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__card">
          <h2>Frontend Developer</h2>
          <div className="experience__content">
            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>HTML</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>CSS</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>JavaScript</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>TypeScript</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>Material UI</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>React JS</h3>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience__card">
          <h2>Backend Developer</h2>
          <div className="experience__content">
            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>Node JS</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>Express JS</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>MongoDB</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>MySQL</h3>
                <small>Experienced</small>
              </div>
            </article>

            <article className="skill">
              <BsPatchCheckFill className="experience_icon" />
              <div>
                <h3>PostgresSQL</h3>
                <small>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

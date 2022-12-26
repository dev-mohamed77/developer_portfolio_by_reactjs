import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/img1.png";

const data_count = [1, 2, 3, 4, 5, 6];

const Portfolio = () => {
  return (
    <section>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container container__portfolio">
        {data_count.map((i) => {
          return (
            <article className="portfolio__card">
              <div className="portfolio_image">
                <img src={IMG1} alt="" />
              </div>
              <h3>
                This is a portfolio item title This is a portfolio item title
              </h3>
              <div className="portfolio_cta">
                <a
                  href="https://github.com/dev-mohamed77"
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a
                  href="https://github.com/dev-mohamed77"
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

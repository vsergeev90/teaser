import React from 'react';
import './button.scss';

const Button = () => {
  return (
    <ul className="explore-button">
      <li>
        <a
          className="animated-arrow"
          href="https://www.pipelife.com/service/news-and-projects.html"
        >
          <span className="the-arrow -left">
            <span className="shaft"></span>
          </span>
          <span className="main">
            <span className="text">Explore More</span>
            <span className="the-arrow -right">
              <span className="shaft"></span>
            </span>
          </span>
        </a>
      </li>
    </ul>
  );
};

export default Button;

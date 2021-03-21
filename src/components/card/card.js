import React from 'react';
import './card.scss';

const Card = ({ data }) => {
  const { title, subtitle, link, image } = data;

  const clickCard = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const t = e.target;
    const link = t.querySelector('.card-link').getAttribute('href');

    window.location.href = link;
  };

  return (
    <div className="card">
      <figure>
        <img src={image} alt="alt text" />
        <figcaption onClick={clickCard}>
          <i className="card-arrow">
            <span></span>
          </i>
          <h3 className="card-title">
            <a href={link} className="card-link">
              {title}
            </a>
          </h3>
          <p className="card-subtitle">{subtitle}</p>
        </figcaption>
      </figure>
    </div>
  );
};

export default Card;

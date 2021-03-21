import React from 'react';
import './articles-teaser.scss';

import Title from '../title/title';
import Card from '../card/card';
import Button from '../button/button';

const ArticlesTeaser = ({ data }) => {
  const cardsMount = data.map((el, index) => {
    return <Card data={el} key={index} />;
  });

  return (
    <section>
      <Title title={'Latest News and Projects'} />
      <div className="teaser-wrapper">{cardsMount}</div>
      <Button />
    </section>
  );
};

export default ArticlesTeaser;

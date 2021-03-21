import React from 'react';

import './App.scss';
import ArticlesTeaser from './components/articles-teaser/articles-teaser.js';

function App() {
  const res = [
    {
      title: 'ACHIEVING A CIRCULAR ECONOMY REQUIRES TARGETED INDUSTRY ACTION',
      subtitle: 'Feb 23, 2021 | 5 min read',
      image:
        'https://www.pipelife.com/service/news-and-projects/_jcr_content/root/teaserrow_copy_1594035824/teaser_copy_copy_cop_1600295803/image.imgTransformer/media_16to10/md-2/1614069333407/plastic-fantastic-in-de-drom-mark-van-loon.jpg',
      link:
        'https://www.pipelife.com/service/news-and-projects/achieving-circular-economy-requires-targeted-industry-action.html',
    },
    {
      title:
        'AUTOMATED 3D PRINTING: UPGRADE FOR  CIVIL ENGINEERING AND INCREASED SAFETY ',
      subtitle: 'Feb 10, 2021 | 4 min read',
      image:
        'https://www.pipelife.com/service/news-and-projects/_jcr_content/root/teaserrow_copy_1594035824/teaser_copy_copy_cop_764745900/image.imgTransformer/media_16to10/md-2/1614069333407/richard-rood-hr2-pipelife-3d-printer-03-02-2020-4816.jpg',
      link:
        'https://www.pipelife.com/service/news-and-projects/automated-3d-printing-upgrade-for-civil-engineering-and-increased-safety.html',
    },
    {
      title: 'Ensuring Safe Water Supply in Earthquake-Affected Croatia ',
      subtitle: 'Feb 3, 2021 | 2 min read',
      image:
        'https://www.pipelife.com/service/news-and-projects/_jcr_content/root/teaserrow_copy_1594035824/teaser_copy_copy_cop_465862355/image.imgTransformer/media_16to10/md-2/1614069333407/WhatsApp%20Image%202021-02-01%20at%2008.27.27.jpg',
      link:
        'https://www.pipelife.com/service/news-and-projects/ensuring-safe-water-supply-in-earthquake-affected-croatia.html',
    },
    {
      title:
        'First Large-Scale Application of Pipelife’s New Wc Cistern Systems in Austria',
      subtitle: 'Dec 28, 2020 | 4 min read',
      image:
        'https://www.pipelife.com/service/news-and-projects/_jcr_content/root/teaserrow_copy_1594035824/teaser_copy_copy_cop_970000703/image.imgTransformer/media_16to10/md-2/1614069333407/20-Flush-Flow-School-Project-Vienna-2.jpg',
      link:
        'https://www.pipelife.com/service/news-and-projects/first-large-scale-application-of-pipelifes-new-wc-cistern-systems-in-austria.html',
    },
  ];

  return (
    <div className="container">
      <ArticlesTeaser data={res} />
    </div>
  );
}

export default App;

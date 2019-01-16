// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Puppies.scss';

// Images
import puppie1 from '@images/puppiesline/dog1.png';
import puppie2 from '@images/puppiesline/dog2.png';
import puppie3 from '@images/puppiesline/dog3.png';
import puppie4 from '@images/puppiesline/dog4.png';
import puppie5 from '@images/puppiesline/dog5.png';
import puppie6 from '@images/puppiesline/dog6.png';
import puppie7 from '@images/puppiesline/dog7.png';
import puppie8 from '@images/puppiesline/dog8.png';

const Puppies = () => {
  return (
    <section className={styles.contentPuppies}>
      <Fragment>
        <div className={styles.line}>
          <ul className={styles.puppies}>
            <li><img src={puppie1} /></li>
            <li><img src={puppie2} /></li>
            <li><img src={puppie3} /></li>
            <li><img src={puppie4} /></li>
            <li><img src={puppie5} /></li>
            <li><img src={puppie6} /></li>
            <li><img src={puppie7} /></li>
            <li><img src={puppie8} /></li>
          </ul>
        </div>
      </Fragment>
    </section>
  );
}

export default Puppies;

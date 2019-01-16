// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Header.scss';

import puppy from '@images/puppy.jpeg';

const Header = () => {
  return (
    <header className={styles.siteHeader}>
      <Fragment>
        <h1>Puppy image gallery</h1>
        <img src={puppy} />
        <blockquote>
          <p>A dog will teach you unconditional love. If you can have that in your life, things won't be too bad.</p>
          <cite>&mdash;Robert Wagner</cite>
        </blockquote>
      </Fragment>
    </header>
  );
}

export default Header;

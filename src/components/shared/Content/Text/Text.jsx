// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Text.scss';

const Text = () => {
  return (
    <section className={styles.contentText}>
      <Fragment>
        <span className={styles.title}>
          Meet The Dogs
        </span>
        <p className={styles.heroText}>
          Be a hero this month and adopt a dog, dogs will teach you unconditional love. If you can have that in your life, things won't be too bad. You’ll be saving his or her life and greatly improving your own as dogs are amazing, supportive, and heroic companions.
        </p>
        <span className={styles.title}>
          Gallery
        </span>
      </Fragment>
    </section>
  );
}

export default Text;

// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Text.scss';

const Text = () => {
  return (
    <section className={styles.contentText}>
      <Fragment>
        <span className={styles.title}>
          Why should i adopt a puppy?
        </span>
        <div className={styles.heroText}>
          <div className={styles.text}>
            <p>Be a hero this month and adopt a dog, dogs will teach you unconditional love. If you can have that in your life, things won't be too bad. </p>
            <p>You’ll be saving his or her life and greatly improving your own as dogs are amazing, supportive, and heroic companions.</p>
            <p>We'd love to work with you. Learn about our grants for adoptions, spay/neuter or emergency relief, or join our free <a href="#">learning community</a> to gain access to many free resources to support you.</p>
          </div>
          <article className={styles.adopt}></article>
        </div>
        <span className={styles.title}>
          Gallery
        </span>
      </Fragment>
    </section>
  );
}

export default Text;

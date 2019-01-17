// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Gallery.scss';

// Images
import p1 from '@images/pets/1.jpeg';
import p2 from '@images/pets/2.jpeg';
import p3 from '@images/pets/3.jpeg';
import p4 from '@images/pets/4.jpeg';
import p5 from '@images/pets/5.jpeg';
import p6 from '@images/pets/6.jpeg';
import p7 from '@images/pets/7.jpeg';
import p8 from '@images/pets/8.jpeg';

const Gallery = () => {
  return (
    <section className={styles.contentGallery}>
      <Fragment>
        <div className={styles.flexbox}>
          <div className={styles.item}>
            <img src={p1}  />
            <p className={styles.title}>1st item</p>
          </div>
          <div className={styles.item}>
            <img src={p2} />
            <p className={styles.title}>2nd item</p>
          </div>
          <div className={styles.item}>
            <img src={p3} />
            <p className={styles.title}>3rd item</p>
          </div>
          <div className={styles.item}>
            <img src={p4} />
            <p className={styles.title}>4th item</p>
          </div>
          <div className={styles.item}>
            <img src={p5} />
            <p className={styles.title}>5th item</p>
          </div>
          <div className={styles.item}>
            <img src={p6} />
            <p className={styles.title}>6th item</p>
          </div>
          <div className={styles.item}>
            <img src={p7} />
            <p className={styles.title}>7th item</p>
          </div>
          <div className={styles.item}>
            <img src={p8} />
            <p className={styles.title}>8th item</p>
          </div>
          <div className={styles.item}>
            <img src={p1} />
            <p className={styles.title}>9th item</p>
          </div>
          <div className={styles.item}>
            <img src={p2} />
            <p className={styles.title}>10th item</p>
          </div>
        </div>
      </Fragment>
    </section>
  );
}

export default Gallery;

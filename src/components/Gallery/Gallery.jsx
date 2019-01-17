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
    <Fragment>
      <section className={styles.contentGallery}>
    		<div className={styles.view}></div>

        <div className={styles.options}>
          <div className={styles.mousescroll}>
            mouse
          </div>

          <div className={styles.scroll}>
            <ul className={styles.list}>
              <li>
                <a href="#">
                  <img className={styles.min} src={p1} alt="Asana" />
                  <div className={styles.show}>
                    <img className={styles.max} src={p1} alt="Asana" />
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <img className={styles.min} src={p2} alt="Asana" />
                  <div className={styles.show}>
                    <img className={styles.max} src={p2} alt="Asana" />
                  </div>
                </a>
              </li>

              <li>
                <a href="#">
                  <img className={styles.min} src={p3} alt="Asana" />
                  <div className={styles.show}>
                    <img className={styles.max} src={p3} alt="Asana" />
                  </div>
                </a>
              </li>


              <li>
                <a href="#">
                  <img className={styles.min} src={p4} alt="Asana" />
                  <div className={styles.show}>
                    <img className={styles.max} src={p4} alt="Asana" />
                  </div>
                </a>
              </li>


              <li>
                <a href="#">
                  <img className={styles.min} src={p5} alt="Asana" />
                  <div className={styles.show}>
                    <img className={styles.max} src={p5} alt="Asana" />
                  </div>
                </a>
              </li>


              <li>
                <a href="#">
                  <img className={styles.min} src={p6} alt="Asana" />
                  <div className={styles.show}>
                    <img className={styles.max} src={p6} alt="Asana" />
                  </div>
                </a>
              </li>


              <li>
                <a href="#">
                  <img className={styles.min} src={p7} alt="Asana" />
                  <div className={styles.show}>
                    <img className={styles.max} src={p7} alt="Asana" />
                  </div>
                </a>
              </li>


              <li>
                <a href="#">
                  <img className={styles.min} src={p8} alt="Asana" />
                  <div className={styles.show}>
                    <img className={styles.max} src={p8} alt="Asana" />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
    	</section>
    </Fragment>
  );
}

export default Gallery;

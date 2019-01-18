// Dependencies
import React, { Fragment } from 'react';

// Styles
import styles from './Gallery.scss';

// Data
const dogs = [
  {
    "image": "pets/1.jpeg",
    "source": "https://unsplash.com/photos/ybHtKz5He9Y",
    "name": "bonnie"
  },
  {
    "image": "pets/2.jpeg",
    "source": "https://unsplash.com/photos/rY79kwEEyGo",
    "name": "toby"
  },
  {
    "image": "pets/3.jpeg",
    "source": "https://unsplash.com/photos/ngqyo2AYYnE",
    "name": "missy"
  },
  {
    "image": "pets/4.jpeg",
    "source": "https://unsplash.com/photos/9A64wd1QaAU",
    "name": "buster"
  },
  {
    "image": "pets/5.jpeg",
    "source": "https://unsplash.com/photos/915UJQaxtrk",
    "name": "lucky"
  },
  {
    "image": "pets/6.jpeg",
    "source": "https://unsplash.com/photos/mx0DEnfYxic",
    "name": "bear"
  },
  {
    "image": "pets/7.jpeg",
    "source": "https://unsplash.com/photos/OsOQhAzcEKc",
    "name": "milo"
  },
  {
    "image": "pets/8.jpeg",
    "source": "https://unsplash.com/photos/6WneSv56YVI",
    "name": "honey"
  },
];

const Gallery = () => {
  return (
    <Fragment>
      <section className={styles.contentGallery}>
    		<article className={styles.view}></article>

        <aside className={styles.options}>
          <div className={styles.mousescroll}>
            mouse
          </div>

          <div className={styles.scroll}>
            <ul className={styles.list}>
              { dogs.map((dog, key) => (
                <li key={key}>
                  <a href="#">
                    <p>{dog.name}</p>
                    <img className={styles.min} src={require(`./${dog.image}`)} alt="Asana" />
                    <div className={styles.show}>
                      <img className={styles.max} src={require(`./${dog.image}`)} alt="Asana" />
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
    	</section>
    </Fragment>
  );
}

export default Gallery;

// Dependencies
import React, { Fragment, Component } from 'react';
import LazyLoad from 'react-lazy-load';

// Styles
import styles from './Gallery.scss';

// Data.
import dogs from '@data/shelter2000Pets.js';

class Gallery extends Component {
  constructor() {
    super();

    // Handling Show, hide & showing selected image.
    this.state = {
      toggle: false,
      selectedDog: ''
    };
  }

  updateBodyStyles() {
    if (this.state.toggle) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }

  // Method - Show, hide & obtaining selected image.
  toggleImage(dog = false) {
    this.setState(() => ({
      toggle: !this.state.toggle,
      selectedDog: dog ? dog.image : ''
    }), this.updateBodyStyles);
  }

  render() {
    return (
      <Fragment>
        <section className={styles.contentGallery}>
          <aside className={styles.options}>

            <div className={styles.mousescroll}>
              <div className={styles.mouse}>
                <div className={styles.scroller}></div>
              </div>
            </div>

            <div className={styles.scroll}>
              <ul className={styles.list}>
                { dogs.map((dog, key) => {
                  const selectedImage = this.state.selectedDog
                    ? <img className={styles.image} src={require(`./${this.state.selectedDog}`)} alt="Asana" />
                    : '';

                  return (
                    <li
                      key={key}
                      onClick={(() => this.toggleImage(dog))}
                    >
                      <LazyLoad height={100} offsetVertical={800}>
                        <>
                          <img className={styles.thumbnailImage} src={require(`./${dog.image}`)} alt="Asana" />
                          <span className={styles.name}>{dog.name}</span>

                          <div className={`${!this.state.toggle ? styles.hide : styles.show }`}>
                            <div className={styles.selectedContainer}>
                              <span
                                className={styles.close}
                                onClick={(() => this.toggleImage())}
                              >
                                x
                              </span>
                              {selectedImage}
                            </div>
                          </div>
                        </>
                      </LazyLoad>


                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </section>
      </Fragment>
    );
  }
}

export default Gallery;

// Dependencies
import React, { Fragment, Component } from 'react';
import LazyLoad from 'react-lazy-load';

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
  ,
  {
    "image": "pets/9.jpeg",
    "source": "https://unsplash.com/photos/CdVG9f96kyg",
    "name": "honey"
  },
  ,
  {
    "image": "pets/10.jpeg",
    "source": "https://unsplash.com/photos/bVA2DI7c9e8",
    "name": "honey"
  },
  ,
  {
    "image": "pets/11.jpeg",
    "source": "https://unsplash.com/photos/GvhSUEN-Lm8",
    "name": "honey"
  },
  ,
  {
    "image": "pets/12.jpeg",
    "source": "https://unsplash.com/photos/t2XHKIdc4Kw",
    "name": "honey"
  },
  ,
  {
    "image": "pets/13.jpeg",
    "source": "https://unsplash.com/photos/saRU3vzmgkY",
    "name": "honey"
  },
  ,
  {
    "image": "pets/14.jpeg",
    "source": "https://unsplash.com/photos/1z-kI6gIEpg",
    "name": "honey"
  },
  ,
  {
    "image": "pets/15.jpeg",
    "source": "https://unsplash.com/photos/zHZ2nTnBnAQ",
    "name": "honey"
  }
];

class Gallery extends Component {
  constructor() {
    super();

    // Handling Show, hide & showing selected image.
    this.state = {
      toggle: true,
      selectedDog: ''
    };
  }

  // Method - Show, hide & obtaining selected image.
  toggle(dog) {
    this.setState({
      toggle: !this.state.toggle,
      selectedDog: dog.image
    });
  }

  render() {
    return (
      <Fragment>
        <section className={styles.contentGallery}>
          <aside className={styles.options}>
            <div className={styles.mousescroll}>
              mouse
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
                      onClick={(() => this.toggle(dog))}
                      >
                        <LazyLoad height={100} offsetVertical={300}>
                          <img className={styles.thumbnailImage} src={require(`./${dog.image}`)} alt="Asana" />
                        </LazyLoad>
                        <span className={styles.name}>{dog.name}</span>

                        <div className={`${this.state.toggle ? styles.hide : styles.show }`}>
                          <div className={styles.selectedContainer}>
                            {selectedImage}
                          </div>
                        </div>
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

// Dependencies
import React from 'react';
import Helmet from 'react-helmet';

// Shared Components
import Header from '@layout/Header/Header';
import Footer from '@layout/Footer/Footer';
import Text from '@layout/Content/Text/Text';

// Components
import Gallery from './Gallery/Gallery';
import Puppies from './Puppies/Puppies';

// Main layout
const App = props => (
  <div>
    <Helmet
      title="Person Information"
      meta={[
        {
          name: 'title',
          content: 'Person Information'
        },
        {
          name: 'description',
          content: 'This recipe talks about React Helmet'
        }
      ]}
    />
    <Header />
    <Puppies />
    <Text />
    <Gallery />
    <Footer />
  </div>
);

export default App;

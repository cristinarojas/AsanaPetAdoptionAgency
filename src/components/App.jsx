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
    {/* This Helmet will help us to manage the SEO on internet */}
    <Helmet
      title="Asana pet adoption"
      meta={[
        {
          name: 'title',
          content: 'Asana pet adoption'
        },
        {
          name: 'description',
          content: 'Asana is actually a pet adoption agency. (Our SF office is so dog-friendly that its not too far a stretch!) We need a web page that contains an image gallery of the pets we have available for adoption. Wed like you to build it'
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

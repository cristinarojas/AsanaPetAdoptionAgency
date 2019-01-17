// Dependencies
import React from 'react';

// Shared Components
import Header from './shared/Header/Header';
import Text from './shared/Content/Text/Text';


// Components
import Gallery from './Gallery/Gallery';
import Puppies from './Puppies/Puppies';

const App = props => (
  <div>
    <Header />
    <Puppies />
    <Text />
    <Gallery />
  </div>
);

export default App;

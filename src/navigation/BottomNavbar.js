import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import Greeting from '../components/Greeting'
import DrawingViewController from '../components/DrawingViewController'
import ListViewController from '../components/ListViewController/ListViewController'
import Gallery from '../components/Gallery'
import { Icon } from 'react-native-elements'

const BottomNavbar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'general', title: 'General', icon: 'home' },
      { key: 'drawing', title: 'Drawing',  icon: 'pencil' },
      { key: 'books', title: 'Books list',  icon: 'book' },
      { key: 'gallery', title: 'Gallery',  icon: 'image' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
      general: Greeting,
      drawing: DrawingViewController,
      books: ListViewController,
      gallery: Gallery,
    });
  
    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
  };

export default BottomNavbar
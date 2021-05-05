import React, { useState } from 'react'

import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native'
import { Appbar } from 'react-native-paper';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

const Gallery = () => {
  const [photo, setPhoto] = useState(null)
 
  const [photos, setPhotos] = useState([[]])

  const addPhotoHandler = ( uri ) => {
    let allPhoto = [...photos];

    if (allPhoto[allPhoto.length -1] && allPhoto[allPhoto.length -1].length < 4) {
      allPhoto[allPhoto.length -1].push( uri )
    } else {
      allPhoto.push([uri])
    }
    
    setPhotos(allPhoto);
  };

  let imageGrid = 0

  return (
    
    <View style={{ flex: 1 }}>
      <Appbar.Header>
          <Appbar.Action icon="plus" onPress={async () => {
        await launchImageLibrary({ mediaType: 'photo', quality: 1, includeBase64: false, cameraType: 'front', saveToPhotos: true, maxWidth: 1000, maxHeight: 600 }, (res) => {

          if (res.didCancel || res.error) {
            showError('oops, sepertinya anda tidak memilih foto nya?');
          } else {
           
            addPhotoHandler(res.uri)
          }

        })}} />
      </Appbar.Header>

      {photos && <ScrollView style={styles.container}>
      {photos.map((photoU, ind) => (
        <View style={ind%2==0 ? styles.imageGrid : styles.imageGridOne}>
            {photoU.map((photoUri, index) => ( <Image key={photoUri} source={{ uri: photoUri }} style={index+1 == 4 && ind%2==0 ? styles.bigImage : styles.image} />))}
        </View>
      ))}
      </ScrollView>}
      
      {console.log(photos)}
    </View>
  )
}

let third = '24.5%'
let bigWidth = '74.5%'

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF'
  },
  photosContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    flexDirection: 'row',
  },
  imageGridOne: {
      flex: 1,
      flexDirection: 'row',
  },
  imageGrid: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    height: 306
  },
  image: {
      width: third,
      height: 100,
      margin: 1,
  },
  bigImage: {
    width: bigWidth,
    height: 304,
    margin: 1,
  }
})


export default Gallery
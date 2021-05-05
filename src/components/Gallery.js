import React, {useState, useEffect} from 'react';

import {
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {Appbar} from 'react-native-paper';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const photosURL = 'https://pixabay.com/api/?key=19193969-87191e5db266905fe8936d565&q=night+city&image_type=photo&per_page=27';

const Gallery = () => {
  const [photo, setPhoto] = useState(null);
  const [photos, setPhotos] = useState([['', '','',''], ['', '','',''], ['', '','',''], ['', '','',''], ['', '','',''], ['', '','',''], ['', '', '']]);

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  
  useEffect(() => {
    fetch(photosURL)
      .then(response => response.json())
      .then(json => {
        setTimeout(() => {
          loadPhotoHandler(json.hits)
        }, 1000);
      })
      .catch(error => alert(error))
      .finally(setLoading(false));
  }, []);

  const addPhotoHandler = uri => {
    let allPhoto = [...photos];

    if (
      allPhoto[allPhoto.length - 1] &&
      allPhoto[allPhoto.length - 1].length < 4
    ) {
      allPhoto[allPhoto.length - 1].push(uri);
    } else {
      allPhoto.push([uri]);
    }

    setPhotos(allPhoto);
  };

  const loadPhotoHandler = data => {
    let arr = [...photos];

    let ind = 0;
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j]  = data[ind]["largeImageURL"];
        ind++;
      }
    }
    setPhotos(arr);
  };

  return (
    <View style={{flex: 1}}>
      <Appbar.Header>
        <Appbar.Action
          icon="plus"
          onPress={async () => {
            await launchImageLibrary(
              {
                mediaType: 'photo',
                quality: 1,
                includeBase64: false,
                cameraType: 'front',
                saveToPhotos: true,
                maxWidth: 1000,
                maxHeight: 600,
              },
              res => {
                if (res.didCancel || res.error) {
                  showError('oops, sepertinya anda tidak memilih foto nya?');
                } else {
                  addPhotoHandler(res.uri);
                }
              },
            );
          }}
        />
      </Appbar.Header>

      {photos && (
        <ScrollView style={styles.container}>
          {photos.map((photoU, ind) => (
            <View style={ind % 2 == 0 ? styles.imageGrid : styles.imageGridOne}>
              {photoU.map((photoUri, index) =>
                photoUri == '' ? (
                  <View
                    style={[
                      index + 1 == 4 && ind % 2 == 0
                        ? [styles.bigImage, {paddingTop: 150}]
                        : [styles.image, {paddingTop: 37}],
                    ]}>
                    <ActivityIndicator styles={{padding: 24}} size="small" color="#0000ff" />
                  </View>
                ) : (
                  <Image
                    key={photoUri}
                    source={{uri: photoUri}}
                    style={
                      index + 1 == 4 && ind % 2 == 0
                        ? styles.bigImage
                        : styles.image
                    }
                  />
                ),
              )}
            </View>
          ))}
           
        </ScrollView>
      )}
      {/* {console.log(data[1]["largeImageURL"])} */}
    </View>
  );
};

let third = '24.5%';
let bigWidth = '74.5%';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
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
    height: 306,
  },
  image: {
    width: third,
    height: 100,
    margin: 1,
    backgroundColor: '#ccc',
  },
  bigImage: {
    width: bigWidth,
    height: 304,
    margin: 1,
    backgroundColor: '#ccc',
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default Gallery;
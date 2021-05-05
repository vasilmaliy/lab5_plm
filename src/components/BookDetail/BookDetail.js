import React from 'react'
import {
    View,
    StyleSheet,
    StatusBar,
    useEffect,
    ActivityIndicator,
    Text,
    Image,
    ScrollView,
} from 'react-native';

import BookImage from '../BookImage'

function BookDetail({book}) {

    if( book.authors) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageBook}>
                    <Image style={styles.imageBook} style={{ width: 150, height: 150 }} source={{uri: book.image}}/>
                </View>
                <View style={styles.details}>
                    <Text>Title: {book.title}</Text>
                    <Text>Subtitle: {book.subtitle}</Text>
                    <Text>Description: {book.desc}</Text>

                    <View style={styles.block}>
                    <Text>Author: {book.authors}
                    </Text>
                    <Text>Publisher: {book.publisher}</Text>
                    </View>
                
                    <View style={styles.block}>
                    <Text>Pages: {book.pages}</Text>
                    <Text>Rating: {book.rating}</Text>
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    )
    } else {
      return <ActivityIndicator styles={{padding: 24}} size="large" color="#0000ff" />
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
      marginBottom: 70,
    },
    imageBook: {
      flex: 1,
      alignItems: 'center',
    },
    details: {
      flex: 1,
      fontSize: 32,
      fontWeight: 'bold',
      marginHorizontal: 15,
    },
    block: {
        marginTop: 40
    }
  });

export default BookDetail

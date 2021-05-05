import React from 'react'
import { View, Image, Text, StyleSheet} from "react-native";
import BookImage from '../BookImage'

const Book = ( {book} ) => {
    
    const bookImage = () => {
        switch (book.image) {
          case "Image_01.png":
            return require('./img/Image_01.png');
          case "Image_02.png":
            return require('./img/Image_02.png');
         case "Image_03.png":
            return require('./img/Image_03.png');
         case "Image_05.png":
            return require('./img/Image_05.png');
         case "Image_06.png":
            return require('./img/Image_06.png');
         case "Image_07.png":
            return require('./img/Image_07.png');
         case "Image_08.png":
            return require('./img/Image_08.png');
         case "Image_10.png":
            return require('./img/Image_10.png');
        }
    }

    return (
        <View style={styles.item}>
            <View style={styles.container}>
                { book.image ? <BookImage image={book.image}/> : <View style={styles.noImage}></View>}
                <View style={styles.informationBox}>
                    <Text style={styles.title}>
                        {book.title}
                    </Text>
                    <Text style={styles.subtitle}>
                        {book.subtitle}
                    </Text>
                    <Text  style={styles.price}>
                         {book.price}
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
    },
    informationBox: {
        flex: 1,
        padding: 5   
    },
    item: {
      height: 165,
      width: '94%',
      marginHorizontal: '3%',
      marginTop: 10,
      borderRadius: 5,
      fontSize: 32,
      backgroundColor: '#ccc',
    },
    title: {
        fontWeight: '700'
    },
    subtitle: {
        fontSize: 13,
    },
    price: {
        fontWeight: '700',
        fontSize: 23
    },
    noImage: {
        width: 150,
        height: 150,
    }
  });

export default Book

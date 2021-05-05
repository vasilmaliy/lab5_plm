import React from 'react'
import { View, Image, Text, StyleSheet} from "react-native";
import BookImage from '../BookImage'

const Book = ( {book} ) => {

    return (
        <View style={styles.item}>
            <View style={styles.container}>
                { book.image ? <Image source={{uri: book.image}} style={{ width: 150, height: 150 }}/> : <View style={styles.noImage}></View>}
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

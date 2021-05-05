import React from 'react'
import {
    View,
    StyleSheet,
    StatusBar,
    useEffect,
    Text,
    ScrollView,
} from 'react-native';
import { book1 , book2, book3, book4, book5, book6, book7, book8, book9, book10 } from '../ListViewController/booksDetails/details'
import Book from "../Book/Book";
import BookImage from '../BookImage'

function BookDetail({book}) {

    const bookDetail = () => {
        switch (book.isbn13) {
          case "9780321856715":
            return book1;
          case "9780321862969":
            return book2;
          case "9781118841471":
            return book3;
          case "9781430236054":
            return book4;
          case "9781430237105":
            return book5;
          case "9781430238072":
            return book6;
          case "9781430245124":
            return book7;
          case "9781430260226":
            return book8;
          case "9781449308360":
            return book9;
          case "9781449342753":
            return book10;
          default:
            return book1;      
        }
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.imageBook}>
                    <BookImage style={styles.imageBook} image={book.image}/>
                </View>
                <View style={styles.details}>
                    <Text>Title: {bookDetail().title}</Text>
                    <Text>Subtitle: {bookDetail().subtitle}</Text>
                    <Text>Description: {bookDetail().desc}</Text>

                    <View style={styles.block}>
                    <Text>Author: {bookDetail().authors}
                    </Text>
                    <Text>Publisher: {bookDetail().publisher}</Text>
                    </View>
                
                    <View style={styles.block}>
                    <Text>Pages: {bookDetail().pages}</Text>
                    <Text>Rating: {bookDetail().rating}</Text>
                    </View>
                    
                </View>
            </View>
        </ScrollView>
    )
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

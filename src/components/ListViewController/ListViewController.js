import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Text,
  TouchableHighlight,
} from "react-native";
import Book from "../Book/Book";
import data from "./BooksList";
import { Appbar, Searchbar } from "react-native-paper";
import AddBook from "../AddBook";
import { SwipeRow } from "react-native-swipe-list-view";
import BookDetail from "../BookDetail/BookDetail";

const ListViewController = () => {
  const [books, setBooks] = useState(data.books);
  const [book, setBook] = useState(null);

  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const [addBook, setAddBook] = useState(false);

  const closeAddBookHandler = () => {
    setAddBook(!addBook);
  };

  const addBookHandler = (title, subtitle, price) => {
    let newBook = {
      title: title,
      subtitle: subtitle,
      isbn13: "noid",
      price: price,
      image: "",
    };
    let allBooks = [...books];
    allBooks.unshift(newBook);
    setBooks(allBooks);
  };

  const deleteBookHandler = (isbn13) => {
    let allBooks = [...books];
    let filteredList = allBooks.filter((book) => {
        return !(isbn13 === book.isbn13)
    })
    setBooks(filteredList);
  }

  if (addBook) {
    return (
      <AddBook
        close={closeAddBookHandler.bind(this)}
        addBookHandler={addBookHandler.bind(this)}
      />
    );
  }

  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [0, 1],
      extrapolate: "clamp",
    });
    return (
      <TouchableOpacity onPress={props.handleDelete} activeOpacity={0.6}>
        <View style={styles.deleteBox}>
          <Animated.Text style={{ transform: [{ scale: scale }] }}>
            Delete
          </Animated.Text>
        </View>
      </TouchableOpacity>
    );
  };

  if (book) {
    return (
      <View>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => {
              setBook(null);
            }}
          />
        </Appbar.Header>
        <BookDetail book={book} />
      </View>
    );
  } else {
    let filteredData = books.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toLowerCase().includes(searchQuery.toLocaleLowerCase())
      );
    });

    return (
      <SafeAreaView>
        <Appbar.Header>
          <View style={styles.headerbar}>
            <Searchbar
              style={styles.searchbar}
              placeholder="Search"
              onChangeText={onChangeSearch}
              value={searchQuery}
            />
            <View>
              <Appbar.Action icon="plus" onPress={() => setAddBook(!addBook)} />
            </View>
          </View>
        </Appbar.Header>
        <ScrollView style={styles.scrollView}>
          {filteredData.map((book) => (
            <View>
              {/* <Book key={book.isbn13} book={book} /> */}
              <View style={styles.standalone}>
                <SwipeRow rightOpenValue={-75} leftOpenValue={75}>
                  
                  <TouchableOpacity style={styles.standaloneRowBack} onPress={() => {
                      deleteBookHandler(book.isbn13);
                      // console.log(book.isbn13)
                    }}>
                    <Text style={styles.backTextWhite}>Delete</Text>
                    <Text style={styles.backTextWhite}>Delete</Text>
                  
                  </TouchableOpacity>
                  
                  
                  <TouchableHighlight
                    onPress={() => {
                      setBook(book);
                    }}
                  >
                    <Book key={book.isbn13} book={book} />
                  </TouchableHighlight>
                </SwipeRow>
              </View>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const width_proportion = "80%";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  searchbar: {
    width: width_proportion,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  headerbar: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 35,
    paddingBottom: 35,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 25,
  },
  buttonClose: {
    marginLeft: 300,
    backgroundColor: "#F194FF",
    width: 40,
    height: 40,
  },
  buttonAdd: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 1,
    marginTop: 10,
  },
  input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
  },

  standalone: {
    marginVertical: 10,
    flex: 1,
    alignItems: 'stretch',
  },
 
  standaloneRowBack: {
    alignItems: "center",
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    height: 165,
    width: '90%',
    marginLeft: "5%",
    marginTop: 10,
    borderRadius: 5,
    fontSize: 32,
  },
  backTextWhite: {
    color: "#FFF",
  },
});

export default ListViewController;

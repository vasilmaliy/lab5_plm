import React, { useState, useEffect } from 'react'
import {
    View,
    StyleSheet,
    Text,
    Pressable,
    TextInput,
    ScrollView
} from "react-native";
import { Appbar, Searchbar } from "react-native-paper";

function AddBook({close, addBookHandler}) {

    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [price, setPrice] = useState(0);


    return (
        <View>
        <ScrollView>
        <Appbar.Header>
          <Appbar.BackAction
            onPress={() => { close()
            }}
          />
        </Appbar.Header>
        <View style={styles.centeredView}>
            
            <View >
              <Text style={styles.modalText}>Title</Text>
              <TextInput
                style={styles.input}
                editable
                maxLength={40}
                onChangeText={title => setTitle(title)}
                defaultValue={title}
              />
              <Text style={styles.modalText}>Subtitle</Text>
              <TextInput
                style={styles.input}
                editable
                maxLength={40}
                onChangeText={subtitle => setSubtitle(subtitle)}
                defaultValue={subtitle}
              />
              <Text style={styles.modalText}>Price</Text>
              <TextInput
                style={styles.input}
                editable
                maxLength={40}
                keyboardType = 'numeric'
                onChangeText={price => setPrice(price)}
                defaultValue={price}
              />
              <Pressable
                style={[styles.button, styles.buttonAdd]}
                onPress={() => addBookHandler(title, subtitle, price)}
              >
                <Text style={styles.textStyle}>add</Text>
              </Pressable>
            </View>
          </View>
          </ScrollView>
      </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      margin: 22,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      marginTop: 25,
      height: 40,
    },
    buttonAdd: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
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
      borderRadius: 5
    },
  });

export default AddBook

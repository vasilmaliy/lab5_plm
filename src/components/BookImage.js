import React from 'react'
import { View, Image, Text, StyleSheet} from "react-native";

function BookImage({image}) {

        
    const bookImage = () => {
        switch (image) {
          case "Image_01.png":
            return require('./Book/img/Image_01.png');
          case "Image_02.png":
            return require('./Book/img/Image_02.png');
         case "Image_03.png":
            return require('./Book/img/Image_03.png');
         case "Image_05.png":
            return require('./Book/img/Image_05.png');
         case "Image_06.png":
            return require('./Book/img/Image_06.png');
         case "Image_07.png":
            return require('./Book/img/Image_07.png');
         case "Image_08.png":
            return require('./Book/img/Image_08.png');
         case "Image_10.png":
            return require('./Book/img/Image_10.png');
        }
    }

    return (
        <View>
            <Image source={bookImage()} style={{ width: 150, height: 150 }} /> 
        </View>
    )
}

export default BookImage

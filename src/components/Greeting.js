import React, { useEffect } from 'react'
import { Text, StyleSheet, View } from 'react-native'

const Greeting = () => {


    return (
        <View style={styles.generalContainer}>
            <Text style={styles.personalInformation}>
            {` 
            Малий Василь 
            Група ІО-82
            ЗК № 8211
            `}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    generalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    personalInformation: {
        textAlign: 'center',
    }
})

export default Greeting

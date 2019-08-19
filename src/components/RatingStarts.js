import React from 'react';
import { StyleSheet } from 'react-native'
import { Rating } from 'react-native-elements';
import { Body, Text, View } from 'native-base';


const RatingStarts = ({ startSize, numberOfStarts, rating, textSize }) => (
    <View style={styles.container}>
    <Text note style={[styles.textStyle, { fontSize: textSize || null }]}>
    {`Average rating:\n ${rating}`}
    </Text>
    <Rating type='star'
     startingValue={numberOfStarts} readonly imageSize={startSize} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textStyle: {
        textAlign: 'center', 
        marginBottom: 10,
    },
});

export default RatingStarts
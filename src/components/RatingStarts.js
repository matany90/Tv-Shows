import React from 'react';
import { StyleSheet } from 'react-native'
import { Rating } from 'react-native-elements';
import { Text, View } from 'native-base';


const RatingStarts = ({ startSize, numberOfStarts, rating, textSize, style }) => (
    <View style={[styles.container, style]}>
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
        marginBottom: 3,
    },
});

export default RatingStarts
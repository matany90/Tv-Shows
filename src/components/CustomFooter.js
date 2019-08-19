import React from 'react';
import { Header, Thumbnail, View, Text } from 'native-base';
import { StyleSheet } from 'react-native';


export default CustomFooter = () => (
    <Header >
        <View style={styles.thumbnailContainer}>
          <Text style={styles.textFooter}>Created By Matan Yechiel</Text>
          <Thumbnail style={styles.thumbnail} source={require('../res/img/matan.jpeg')} />
          </View>
  </Header>
)

const styles = StyleSheet.create({
  thumbnailContainer: {
    flexDirection: 'row',
     justifyContent:'flex-end',
      alignItems:'flex-end'
  },
  textFooter: {
    color:'white',
     marginRight: 10,
      marginBottom: 10
  },
  thumbnail: {
    height :40,
    width:40,
    borderRadius:20,
    marginBottom: 10
  }
})
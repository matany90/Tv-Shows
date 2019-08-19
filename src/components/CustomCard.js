import React from 'react';
import { Image, TouchableOpacity, StyleSheet } from 'react-native'
import { Card, CardItem, Text, Body } from 'native-base';
import SCREEN_IMPORT from 'Dimensions'

import RatingStarts from './RatingStarts';

const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width

const ShowCard = ({ onPress, image, title, rating }) => (
      <TouchableOpacity onPress={onPress} style={styles.itemStyle}>
          <Card style={styles.card}>
            <CardItem cardBody>
              <Image source={image === 'noImage' ? require('../res/img/noImage.png') : {uri: image }} 
              style={styles.image}/>
            </CardItem>
            <CardItem>
                <Body>
                  <Text style={styles.title}>{title}</Text>
                </Body>
            </CardItem>
              <RatingStarts
              rating={rating || "No rating avaliable"}
              numberOfStarts={rating / 2}
              startSize={28}
              />
          </Card>
    </TouchableOpacity>
    );     
 
const styles = StyleSheet.create({
    itemStyle: {
        width: (SCREEN_WIDTH / 2) - 10,
        height: 460,
        marginLeft: 2.5,
        marginRight: 2.5,
        marginBottom: 5
    },
    card: {
      height: 450,
    },
    image: {
      resizeMode: 'cover', 
      height: 300,
       flex: 1 
    },
    title: {
      textAlign: 'center', 
      alignSelf: 'center',
      fontSize: 15
    }
  })

export default ShowCard;
import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';
import SCREEN_IMPORT from 'Dimensions'
  
const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width


const ShowCard = (props) => (
    <TouchableOpacity onPress={props.onPress} style={styles.itemStyle}>
          <Card style={{height: 420}}>
            <CardItem cardBody>
              <Image source={{uri: props.image}} 
              style={{  resizeMode: 'cover', height: 300, flex: 1 }} />
            </CardItem>
            <CardItem>
                <Body>
                  <Text>{props.title}</Text>
                  {/*<Text note>GeekyAnts</Text>*/}
                </Body>
            </CardItem>
            <CardItem>
              <Body>
              <Rating
            imageSize={20}
            readonly
             startingValue={"{3.3}"}
                />
              </Body>
            </CardItem>
          </Card>
    </TouchableOpacity>     
) 

const styles = {
    itemStyle: {
        width: (SCREEN_WIDTH / 2) - 10,
        height: 430,
        marginLeft: 5,
        marginRight: 5,
        marginBotton: 20
    }
  }

export default ShowCard;
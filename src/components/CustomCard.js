import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';
import SCREEN_IMPORT from 'Dimensions'
  
const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width


const ShowCard = (props) => {
  const {onPress, image, title, rating} = props;
    return (
      <TouchableOpacity onPress={onPress} style={styles.itemStyle}>
          <Card style={{height: 450}}>
            <CardItem cardBody>
              <Image source={{uri: image}} 
              style={{  resizeMode: 'cover', height: 300, flex: 1 }} />
            </CardItem>
            <CardItem>
                <Body>
                  <Text 
                  style={{textAlign: 'center', alignSelf: 'center', fontSize: 15}}>{title}</Text>
                </Body>
            </CardItem>
            <CardItem>
              <Body style={{ flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                <Text note style={{textAlign: 'center', alignSelf: 'center', marginBottom: 10}}>
                {`Average rating: ${rating}`}
                </Text>
              <Rating type='star' startingValue={rating / 2} readonly imageSize={28} />
              </Body>
            </CardItem>
          </Card>
    </TouchableOpacity>
    );     
} 

const styles = {
    itemStyle: {
        width: (SCREEN_WIDTH / 2) - 10,
        height: 460,
        marginLeft: 2.5,
        marginRight: 2.5,
        marginBottom: 5
    }
  }

export default ShowCard;
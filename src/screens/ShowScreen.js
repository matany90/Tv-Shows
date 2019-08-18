import React, { Component } from 'react';
import { Image } from 'react-native';
import { View, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Rating, AirbnbRating } from 'react-native-elements';
import SCREEN_IMPORT from 'Dimensions'
  
const SCREEN_WIDTH = SCREEN_IMPORT.get('window').width

const ShowScreen = (props) => {
    const show = props.navigation.getParam('show')
    console.log(show)
    return (
        <View style={{ width: SCREEN_WIDTH }}>
            <Card style={{ flex: 0 }}>
                <CardItem cardBody>
                    <Image source={{ uri: show.image.original }}
                        style={{ resizeMode: 'cover', height: 500, flex: 1 }} />
                </CardItem>
                <CardItem>
                    <Body style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text note style={{ textAlign: 'center', alignSelf: 'center', marginBottom: 10 }}>
                            {`Average rating: ${show.rating.average}`}
                        </Text>
                        <Rating type='star' startingValue={show.rating.average / 2} readonly imageSize={28} />
                    </Body>
                </CardItem>
            </Card>
        </View>
    );
};

export default ShowScreen;    


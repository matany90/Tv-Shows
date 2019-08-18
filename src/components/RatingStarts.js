import React from 'react';
import { Rating, AirbnbRating } from 'react-native-elements';
import {Body, Text} from 'native-base';


const RatingStarts = (props) => (
    <Body style={{ flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
    <Text note style={{textAlign: 'center', alignSelf: 'center', marginBottom: 10, fontSize: props.textSize || null}}>
    {`Average rating: ${props.rating}`}
    </Text>
    <Rating type='star'
     startingValue={props.numberOfStarts} readonly imageSize={props.startSize} />
    </Body>
)

export default RatingStarts
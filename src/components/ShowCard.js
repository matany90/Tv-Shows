import React from 'react';
import { Card, Button, Icon } from 'react-native-elements';
import { View, Text, Image, TouchableOpacity } from 'react-native'

const ShowCard = (props) => (
    <TouchableOpacity onPress={props.onPress}>
    <Card
        title='HELLO WORLD'
        /*image={require(props.image)}*/>
        <Text style={{ marginBottom: 10 }}>
            The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
            icon={<Icon name='code' color='#ffffff' />}
            backgroundColor='#03A9F4'
            buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
            title='VIEW NOW' />
    </Card>
    </TouchableOpacity>
)

export default ShowCard;
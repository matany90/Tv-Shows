import React from 'react';
import { View, Text } from 'react-native';
import CustomHeader from '../components/CustomHeader'

export default ShowScreen = (props) => {
    const show = props.navigation.getParam('show')
        return (
            <View>
                <Text>{show.name}</Text>
            </View>    
        );  
    };


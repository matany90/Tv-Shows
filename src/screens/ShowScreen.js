import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ShowScreen extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.show.id}</Text>
            </View>    
        );  
    }
}

const mapStateToProps = ({ shows }, ownProps) => {  
    console.log(shows[ownProps.navigation.getParam('id')]) 
    return { show: shows[ownProps.navigation.getParam('id')] };
}

export default connect(mapStateToProps)(ShowScreen);
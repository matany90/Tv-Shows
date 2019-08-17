import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import CustomHeader from '../components/CustomHeader'

class ShowScreen extends Component {

    render() {
        return (
            <View>
                <Text>{this.props.show.name}</Text>
            </View>    
        );  
    }
}

const mapStateToProps = ({ shows }, ownProps) => {  

    return { show: shows[ownProps.navigation.getParam('id')] };
}

export default connect(mapStateToProps)(ShowScreen);
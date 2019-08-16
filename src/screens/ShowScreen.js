import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ShowScreen extends Component {

    render() {
        return (
            <View>
                <Text>bbb</Text>
            </View>    
        );  
    }
}

const mapStateToProps = ({ shows }, ownProps) => {
    
    return { show: shows[ownProps.id] };
}

export default connect(mapStateToProps)(ShowScreen);
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class ShowScreen extends Component {
    static navigationOptions = ({ navigation, show }) => {
        return {
          title: navigation.getParam('title'),
        };
      };

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
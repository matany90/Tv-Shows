import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'react-native';
import { fetchShows } from '../actions';
import _ from 'lodash';

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Home',
      }; 

    componentDidMount() {
        this.props.fetchShows();  
    }

    renderShows = () => {
        const { shows, navigation } = this.props;
        return _.map(shows, show => (
            <Button 
            onPress={() => navigation.navigate('Show', {id: show.id})}
            title="test" />
        )) 
    }

    render() {
        return (
            <View>
                {this.renderShows()}
            </View>
        );
    }
}

const mapStateToProps = ({ shows }) => {

    return { shows };
}


export default connect(mapStateToProps, { fetchShows })(MainScreen);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text } from 'react-native';
import { fetchShows } from '../actions';
import ShowCard from '../components/ShowCard'

class MainScreen extends Component {
    static navigationOptions = {
        title: 'Home',
      }; 

    componentDidMount() {
        this.props.fetchShows();  
    }

    renderShows = () => {
        const { shows, navigation } = this.props;
        return shows.map(show => (
            <ShowCard 
            onPress={() => navigation.navigate('Show', {id: show.id})} 
            /*image={show.image.medium}*/
            />
        )) 
    }

    render() {
        return (
            <View style={{flex: 1}}>
                {this.renderShows()}
            </View>
        );
    }
}

const mapStateToProps = ({ shows }) => {
    return { shows };
}


export default connect(mapStateToProps, { fetchShows })(MainScreen);
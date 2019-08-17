import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, FlatList } from 'react-native';
import { fetchShows } from '../actions';
import ShowCard from '../components/ShowCard'
import CustomHeader from '../components/CustomHeader'
import _ from 'lodash'

class MainScreen extends Component {

    componentDidMount() {
        this.props.fetchShows();  
    }

    renderShows = () => {
        const { shows, navigation } = this.props;
        return (
            <FlatList
            data={shows}
            renderItem={({item, index}) => 
                <View key={index}>
                <ShowCard 
                title={item.name}
                onPress={() => navigation.navigate('Show', {id: index, title: item.name})}
                image={item.image.original} />
                </View>} 
                    numColumns={2}
            /> 
        );
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}>
                {this.renderShows()}
            </View>
        );
    }
}

const mapStateToProps = ({ shows }) => {

    return { shows };
}


export default connect(mapStateToProps, { fetchShows })(MainScreen);
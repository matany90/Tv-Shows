import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, FlatList } from 'react-native';
import { fetchShows, onSearchIconClick, increasePageNumber } from '../actions';
import CustomCard from '../components/CustomCard'
import CustomHeader from '../components/CustomHeader'
import {Content, List, ListItem} from 'native-base';
import _ from 'lodash'

class MainScreen extends Component {

    renderShows = () => {
        const { showsArray, navigation, showSearchBar, page } = this.props;
        return (
            <FlatList
            data={showsArray}
            onEndReached={() => {
                this.props.fetchShows(page)
            }}
            onEndThreshold={0}
            renderItem={({item, index}) => 
                <View key={item.id}>
                <CustomCard 
                title={item.name}
                image={item.image.original}
                rating={item.rating.average}
                onPress={() => {
                    navigation.navigate('Show', { show: item, title: item.name })
                    if (showSearchBar) {
                        this.props.onSearchIconClick()
                    }
                }}
                />
                </View>
                } 
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

const mapStateToProps = ({ shows, header }) => {
    const { searchBarText, showSearchBar } = header;
    let { showsArray, page } = shows;
    /*showsArray = _.filter(showsArray, show => (show.name.toLowerCase().includes(searchBarText.toLowerCase()) || searchBarText === ''))*/
    /*let filterShows = [];
    showsArray.map(show => {
        if (show.name.toLowerCase().includes(searchBarText.toLowerCase()) || searchBarText === '') {
            filterShows.push(show)
        }
    }) */
    //console.log(filterShows)
    console.log(showsArray)
    return { showsArray, showSearchBar, page };
}


export default connect(mapStateToProps, { fetchShows, onSearchIconClick, increasePageNumber })(MainScreen);
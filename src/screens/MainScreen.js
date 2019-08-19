import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import { fetchAllShows, onSearchIconClick, initPageNumber } from '../actions';
import { Content, List, ListItem } from 'native-base';
import {HttpsStringFormat} from '../Utils';
import _ from 'lodash'

import CustomCard from '../components/CustomCard'
import CustomHeader from '../components/CustomHeader'

class MainScreen extends Component {
    renderShows = () => {
        const { dataToShow, navigation, showSearchBar } = this.props;
        return (
            <FlatList
            data={dataToShow}
            onEndReached={() => this.props.fetchAllShows()}
            numColumns={2}
            onEndThreshold={200}
            renderItem={({item, index}) => this.renderShowItem(item)} 
            /> 
        );
    }
    
    onCardClick = (item) => {
        const { navigation, showSearchBar } = this.props;
        const { name } = item

        navigation.navigate('Show', { show: item, title: name })
        if (showSearchBar) {
            this.props.onSearchIconClick()
        }
    }

    renderShowItem = (item) => {
        const { name, image, rating, id } = item;
        return (
            <View key={id}>
            <CustomCard 
            title={name || "No Name"}
            image={image !== null ? HttpsStringFormat(image.original) : 'noImage'}
            rating={rating.average}
            onPress={() => this.onCardClick(item)}
            />
            </View>
            );
        }

    render() {
        return (
            <View style={styles.showsListContainer}>
                {this.renderShows()}
            </View>
        );
    }
}


const styles = StyleSheet.create({
    showsListContainer: {
        flex: 1, 
        justifyContent:'center', 
        alignItems:'center'
    }
})

const mapStateToProps = ({ data, header }) => {
    const { searchBarText, showSearchBar } = header;
    const { allShows, page, filterShows } = data;

    const dataToShow = searchBarText === '' ? allShows : filterShows
    console.log(allShows)
    return { dataToShow, showSearchBar, page, searchBarText };
}


export default connect(mapStateToProps, { fetchAllShows, onSearchIconClick,
     initPageNumber })(MainScreen);
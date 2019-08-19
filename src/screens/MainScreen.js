import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Button, Text, FlatList, StyleSheet } from 'react-native';
import { fetchShows, onSearchIconClick, initPageNumber } from '../actions';
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
            onEndReached={() => this.props.fetchShows()}
            numColumns={2}
            onEndThreshold={200}
            renderItem={({item, index}) => this.renderShowItem(item)} 

            /> 
        );
    }

    renderShowItem = (item) => {
        const { navigation, showSearchBar } = this.props;
        const { name, image, rating, id } = item;
        return (
            <View key={id}>
            <CustomCard 
            title={name || "No Name"}
            image={image !== null ? HttpsStringFormat(image.original) : 'noImage'}
            rating={rating.average}
            onPress={() => {
                navigation.navigate('Show', { show: item, title: name })
                if (showSearchBar) {
                    this.props.onSearchIconClick()
                }
            }}
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

const mapStateToProps = ({ shows, header }) => {
    const { searchBarText, showSearchBar } = header;
    const { showsArray, page, filterShows } = shows;

    const dataToShow = searchBarText === '' ? showsArray : filterShows
    return { dataToShow, showSearchBar, page, searchBarText };
}


export default connect(mapStateToProps, { fetchShows, onSearchIconClick, initPageNumber })(MainScreen);
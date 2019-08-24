import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchAllShows, onSearchIconClick, initPageNumber } from '../actions';
import { HttpsStringFormat } from '../Utils';
import _ from 'lodash'

import CustomCard from '../components/CustomCard'

class MainScreen extends Component {
    renderShows = () => {
        const { dataToShow } = this.props;

        if (_.isEmpty(dataToShow)) {
            return <ActivityIndicator size="large" color="#0000ff" />
        }
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
    const { allShows, filterShows } = data;
    const dataToShow = searchBarText === '' ? allShows : filterShows

    return { dataToShow, showSearchBar, searchBarText };
}


export default connect(mapStateToProps, { fetchAllShows, onSearchIconClick,
     initPageNumber })(MainScreen);
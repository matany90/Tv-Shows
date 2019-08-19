import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchShows, initPageNumber } from '../actions'
import _ from 'lodash';

class LoadingScreen extends Component {
    componentDidMount() {
        this.props.initPageNumber();
        this.props.fetchShows();  
    }

    render() {
        const { showsArray, navigation } = this.props;
        if (_.isEmpty(showsArray)) {
            return(
                <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ); 
        }
        return navigation.navigate('App')
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10
    }
  })

const mapStateToProps = ({ shows }) => {
    const { showsArray } = shows;
    return { showsArray }
}

export default connect(mapStateToProps, { fetchShows, initPageNumber })(LoadingScreen);
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import { fetchShows } from '../actions'
import _ from 'lodash';

class LoadingScreen extends Component {
    componentDidMount() {
        this.props.fetchShows();  
    }

    render() {
        const { shows, navigation } = this.props;
        if (_.isEmpty(shows)) {
            return(
                <View style={[styles.container, styles.horizontal]}>
                <ActivityIndicator size="large" color="#0000ff" />
                </View>
            ); 
        }
        return navigation.navigate('Main')
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
    return { shows }
}

export default connect(mapStateToProps, { fetchShows })(LoadingScreen);
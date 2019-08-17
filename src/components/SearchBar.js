import React, {Component} from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, InputGroup } from 'native-base';
import CustomBackIcon from './CustomBackIcon';
import {connect} from 'react-redux';
import {onSearchIconClick} from '../actions';

class SearchBar extends Component {
    render() {
        return (
            <Item>
                <CustomBackIcon onPress={() => this.props.onSearchIconClick()} />
                <Input placeholder="Search" />
                <Icon name="ios-people" />
            </Item>
        );
    }
}

export default connect(null, {onSearchIconClick})(SearchBar);
import React, {Component} from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, InputGroup } from 'native-base';
import CustomBackIcon from './CustomBackIcon';
import { connect } from 'react-redux';
import { onSearchIconClick, onSearchBarTextChange } from '../actions';

class SearchBar extends Component {
    render() {
        const { searchBarText } = this.props;
        return (
            <Item>
                <CustomBackIcon onPress={() => this.props.onSearchIconClick()} />
                <Input 
                placeholder="Search"
                value={searchBarText}
                onChangeText={text => this.props.onSearchBarTextChange(text)}
                 />
                <Icon name="ios-search" />
            </Item>
        );
    }
}

const mapStateToProps = ({ header }) => {
    const { searchBarText } = header;

    return { searchBarText };
}

export default connect(mapStateToProps, { onSearchIconClick, onSearchBarTextChange })(SearchBar);
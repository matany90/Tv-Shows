import React, {Component} from 'react';
import { Item, Input, Icon } from 'native-base';
import CustomBackIcon from './CustomBackIcon';
import { connect } from 'react-redux';
import { onSearchIconClick, onSearchBarTextChange, fetchFilterShows, clearFilterData } from '../actions';

const WAIT_INTERVAL = 200

class SearchBar extends Component {
    componentDidMount() {
        this.timer = null;
    }
    
    render() {
        const { searchBarText } = this.props;
        return (
            <Item>
                <CustomBackIcon onPress={() => {
                    this.props.onSearchIconClick()
                    this.props.clearFilterData() }} />
                <Input 
                placeholder="Search"
                value={searchBarText}
                onChangeText={text => this.handleTextChange(text)}
                 />
                <Icon name="ios-search" />
            </Item>
        );
    }

    handleTextChange = (text) => {
        const { searchBarText } = this.props;
        clearTimeout(this.timer);
        this.props.onSearchBarTextChange(text)
        this.timer = setTimeout(() => this.props.fetchFilterShows(text), WAIT_INTERVAL);
    }
}


const mapStateToProps = ({ header }) => {
    const { searchBarText } = header;

    return { searchBarText };
}

export default connect(mapStateToProps, { onSearchIconClick,
     onSearchBarTextChange, fetchFilterShows, clearFilterData })(SearchBar);
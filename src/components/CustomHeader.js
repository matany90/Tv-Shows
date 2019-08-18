import React, { Component } from 'react';
import { StyleProvider, Header, Left, Body, Right, Button, Icon, Title, Item, Input, View, InputGroup, Text } from 'native-base';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { onSearchIconClick } from '../actions';
import CustomBackIcon from './CustomBackIcon';

class CustomHeader extends Component {

  renderHeaderContent = () => {
    const { title, showSearchBar } = this.props;
    if (!showSearchBar) {
      return (
        <Header>
          <Left>
            {this.renderBackButton()}
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            {this.renderSearchIcon()}
          </Right>
        </Header>
      );
    }
    return (
      <Header searchBar rounded>
        <SearchBar />
      </Header>
    );
  }

  renderBackButton = () => {
    const { title, onPressBack } = this.props;
    if (title === "All Shows") {
      return null;
    }
    return (
      <CustomBackIcon onPress={() => onPressBack()} />
    );
  }

  renderSearchIcon = () => {
    const { title } = this.props;
    if (title === "All Shows") {
      return (
        <Button transparent onPress={() => this.props.onSearchIconClick()}>
          <Icon name='search' />
        </Button>
      );
    }
    return null;
  }

  render() {
    return (
      this.renderHeaderContent()
    );
  }
}

const mapStateToProps = ({ header }) => {
  const { showSearchBar } = header;
  return { showSearchBar }
}

export default connect(mapStateToProps, { onSearchIconClick })(CustomHeader);
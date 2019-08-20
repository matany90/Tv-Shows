import React, { Component } from 'react';
import { StyleProvider, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { onSearchIconClick, clearFilterData } from '../actions';
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
      <CustomBackIcon onPress={() => { 
        onPressBack()
         this.props.clearFilterData()
        }} />
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

export default connect(mapStateToProps, { onSearchIconClick, clearFilterData })(CustomHeader);
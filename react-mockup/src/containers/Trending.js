import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { getQuotes } from '../selectors/trending';
import TopPosts from '../components/user/TopPosts';
import { fetchQuotes } from '../actions/trending';

class Trending extends PureComponent {
  static propTypes = {
    quotes: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <TopPosts quotes={this.props.quotes} />
    );
  }
}

const mapStateToProps = state => ({
  quotes: getQuotes(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchQuotes());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Trending);



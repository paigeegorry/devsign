import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Hums from '../components/hums/Hums';
import { getHums } from '../selectors/hums';
import { fetchHums } from '../actions/hums';

class AllHums extends PureComponent {
  static propTypes = {
    hums: PropTypes.array.isRequired,
    fetch: PropTypes.func.isRequired
  }

  componentDidMount() {
    this.props.fetch();
  }

  render() {
    return (
      <Hums hums={this.props.hums} />
    );
  }
}

const mapStateToProps = state => ({
  hums: getHums(state)
});

const mapDispatchToProps = dispatch => ({
  fetch() {
    dispatch(fetchHums());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllHums);

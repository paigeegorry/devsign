import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import HumForm from '../components/hums/HumForm';
import { createHum, updateHum } from '../actions/hums';
import PropTypes from 'prop-types';
import { getHum } from '../selectors/hums';
import { getUserId } from '../selectors/session';

class Hum extends PureComponent {
  static propTypes = {
    hum: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired
  }

  render() {
    return (
      <HumForm 
        onSubmit={this.props.onSubmit} 
        onChange={this.props.onChange} 
        hum={this.props.hum} 
      />
    );
  }
}

const mapStateToProps = state => ({
  hum: getHum(state), 
  user: getUserId(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit(hum, event) {
    event.preventDefault();
    dispatch(createHum({ hum }));
  },
  onChange({ target }) {
    dispatch(updateHum(target.value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Hum);

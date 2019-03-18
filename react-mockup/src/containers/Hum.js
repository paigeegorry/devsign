import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import HumForm from '../components/hums/HumForm';
import { createHum, updateHum } from '../actions/hums';
import PropTypes from 'prop-types';
import { getHum } from '../selectors/hums';

class Hum extends PureComponent {
  static propTypes = {
    hum: PropTypes.string.isRequired,
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
  hum: getHum(state)
});

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(event) {
    event.preventDefault();
    console.log(props);
    dispatch(createHum(props.hum));
  },
  onChange() {
    dispatch(updateHum(props.hum));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Hum);

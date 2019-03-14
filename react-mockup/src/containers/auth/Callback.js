import React from 'react';
import { connect } from 'react-redux';
import { setSession } from '../../actions/session';
import PropTypes from 'prop-types';
import { getToken } from '../../selectors/session';
import { Redirect } from 'react-router-dom';
import Loading from '../../components/app/Loading';

class Callback extends React.PureComponent {
  static propTypes = {
    handleAuth: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.handleAuth();
  }

  render() {
    if(this.props.token) {
      return <Redirect to="/" />;
    }
    return (
      <Loading />
    );
  }
}

const mapStateToProps = state => ({
  token: getToken(state)
});

const mapDispatchToProps = dispatch => ({
  handleAuth() {
    dispatch(setSession());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Callback);

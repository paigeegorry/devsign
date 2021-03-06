import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../services/auth';
import { getToken } from '../../selectors/session';
import Loading from '../../components/app/Loading';

export const withSession = Component => {
  class WithSession extends React.PureComponent {
    static propTypes = {
      token: PropTypes.string.isRequired
    }
    componentDidMount() {
      if(!this.props.token) {
        login();
      }
    }
    render() {
      if(!this.props.token) return <Loading />;
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    token: getToken(state)
  });
  
  return connect(mapStateToProps)(WithSession);
};

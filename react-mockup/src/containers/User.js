import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import UserInfo from '../components/user/UserInfo';
import { getUserHandle, getUserProfilePicture } from '../selectors/session';

class User extends PureComponent {
  static propTypes = {
    handle: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired
  }

  render() {
    return (
      <UserInfo {...this.props} />
    );
  }
}

const mapStateToProps = state => ({
  handle: getUserHandle(state),
  profilePicture: getUserProfilePicture(state)
});

export default connect(
  mapStateToProps
)(User);

import React, { Component } from 'react';
import { connect } from 'react-redux';
class UserInDetail extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { props } = this;
    const { users, currentUserId } = props;
    const currentUser = users.filter((user) => {
      if (user.id === currentUserId) {
        return true;
      }
    })[0];
    return <div>{`${currentUser.fname} ${currentUser.lname}`}</div>;
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.data,
    currentUserId: state.currentUserId,
  };
}

export default connect(mapStateToProps)(UserInDetail);

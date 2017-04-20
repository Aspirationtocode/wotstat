import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { changeCurrentUserId } from '../actions';
class User extends Component {
  constructor(props) {
    super(props);
    this.changeCurrentUserId = this.changeCurrentUserId.bind(this);
  }
  changeCurrentUserId(id) {
    const { props } = this;
    props.dispatch(changeCurrentUserId(id));
    props.dispatch(push(`/${id}`));
  }
  render() {
    const { props } = this;
    return (
      <li className="user" onClick={() => this.changeCurrentUserId(props.id)}>
        {`${props.fname} ${props.lname}`}
        <div className="user__remove-button" onClick={props.removeUser} />
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.data,
    currentUserId: state.currentUserId,
  };
}

export default connect(mapStateToProps)(User);

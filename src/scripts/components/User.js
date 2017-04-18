import React, { Component } from 'react';

class User extends Component {
  render() {
    const { props } = this;
    return (
      <li className="user">
        {`${props.fname} ${props.lname}`}
        <div className="user__remove-button" onClick={props.removeUser} />
      </li>
    );
  }
}

export default User;

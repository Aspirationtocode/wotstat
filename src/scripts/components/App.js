import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser } from '../actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }
  removeUser(index) {
    const { props } = this;
    const { dispatch } = props;
    dispatch(removeUser(index));
  }
  addUser() {
    const { dispatch } = this.props;
    dispatch(addUser());
  }
  renderList() {
    const { props } = this;
    return props.users.map((user, i) => (
      <li className="list__item" key={i} onClick={() => this.removeUser(i)}>{user}</li>
    ));
  }
  render() {
    return (
      <div className="app">
        <button className="add-user" onClick={this.addUser}>Добавить пользователя</button>
        <ul className="list">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users,
  };
}

export default connect(mapStateToProps)(App);

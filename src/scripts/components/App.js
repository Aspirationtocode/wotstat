import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser, removeUser, fetchUsers } from '../actions';

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
  renderList(fetched) {
    const { props } = this;
    if (fetched) {
      return props.users.map((user, i) => (
        <li className="list__item" key={i} onClick={() => this.removeUser(i)}>
          {`${user.fname} ${user.lname}`}
        </li>
      ));
    }
    return <div>Загрузка пользователей...</div>;
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers(dispatch));
  }
  render() {
    const { props } = this;
    console.log(props);
    return (
      <div className="app">
        <button className="add-user" onClick={this.addUser}>Добавить пользователя</button>
        <ul className="list">
          {this.renderList(props.fetched)}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    users: state.users.data,
    fetched: state.users.fetched,
  };
}

export default connect(mapStateToProps)(App);

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser, removeUser, fetchUsers } from '../actions';
import User from './User';

class App extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchUsers(dispatch));
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
    if (fetched && props.users.length) {
      return props.users.map((user, i) => (
        <User
          key={user.id}
          removeUser={() => this.removeUser(i)}
          fname={user.fname}
          lname={user.lname}
        />
      ));
    }
    return <div>Загрузка пользователей...</div>;
  }
  render() {
    const { props } = this;
    return (
      <div className="app">
        <button className="add-user" onClick={this.addUser}>Добавить пользователя</button>
        <ul className="user-list">
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

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(App);

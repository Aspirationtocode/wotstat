import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchPlayers, clearSearchPlayers } from '../actions';
import SearchInput from './SearchInput';
import { roundNumber } from '../constants';

class PlayersSearchList extends Component {
  constructor(props) {
    super(props);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderPlayers = this.renderPlayers.bind(this);
  }
  handleSearch(query) {
    const { props } = this;
    props.dispatch(clearSearchPlayers());
    props.dispatch(fetchSearchPlayers(props.dispatch, query));
  }
  renderPlayers() {
    const { props } = this;
    const players = props.searchPlayers.data;
    if (players.length > 0) {
      return players.map(player => (
        <div className="players-search-list-item" key={player.account_id}>
          <div className="players-search-list-item__left-part">
            <div className="players-search-list-item__player-nickname">{player.nickname}</div>
            <div className="players-search-list-item__player-info">
              <div className="players-search-list-item__player-battles">
                <div className="players-search-list-item__player-battles-text">
                  {player.statistics.all.battles}
                </div>
                <div className="players-search-list-item__player-battles-icon" />
                <div className="players-search-list-item__player-battles-percent">
                  {
                    `${roundNumber(100 * player.statistics.all.wins / player.statistics.all.battles, 2)} %`
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="players-search-list-item__right-part">
            <div className="players-search-list-item__personal-rating-image" />
            <div className="players-search-list-item__personal-rating-text">
              {player.global_rating}
            </div>
          </div>
        </div>
      ));
    }
    return <div>Нет поиска</div>;
  }
  render() {
    const { props } = this;
    const players = props.searchPlayers.data;
    return (
      <div className="players-search-list">
        <SearchInput handleSearch={this.handleSearch} />
        <div className="players-search-list__response-number-wrapper">
          <span className="players-search-list__response-number">
            {`найдено ${players.length} результатов`}
          </span>
        </div>
        {this.renderPlayers()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchPlayers: state.searchPlayers,
  };
}

export default connect(mapStateToProps)(PlayersSearchList);

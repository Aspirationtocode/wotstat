import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSearchPlayers, clearSearchPlayers } from '../actions';
import SearchInput from './SearchInput';
import Preloader from './Preloader';
import { roundNumber } from '../constants';
import Proschet from './Proschet';
import PlayerSearchListItem from './PlayerSearchListItem';

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
    return players.map((player) => {
      let battlesPercent = null;
      if (player.statistics.all.battles > 0) {
        battlesPercent = roundNumber(
          100 * (player.statistics.all.wins / player.statistics.all.battles),
          2,
        );
      } else {
        battlesPercent = 0;
      }
      return (
        <PlayerSearchListItem
          key={player.account_id}
          nickname={player.nickname}
          allBattles={player.statistics.all.battles}
          battlesPercent={battlesPercent}
          globalRating={player.global_rating}
        />
      );
    });
  }
  render() {
    const { props } = this;
    const players = props.searchPlayers.data;
    let result = null;
    if (props.searchPlayers.fetching) {
      result = <Preloader />;
    } else {
      result = this.renderPlayers();
    }
    return (
      <div>
        <SearchInput handleSearch={this.handleSearch} />
        <div className="players-search-list">
          <div className="players-search-list__response-number-wrapper">
            <span className="players-search-list__response-number">
              <Proschet variants="найден, найдены, найдено" count={players.length} />
              <span>{` ${players.length} `}</span>
              <Proschet variants="результат, результата, результатов" count={players.length} />
            </span>
          </div>
          {result}
        </div>
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

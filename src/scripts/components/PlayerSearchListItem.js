import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PlayerSearchListItem extends Component {
  render() {
    const { nickname, allBattles, battlesPercent, globalRating } = this.props;
    return (
      <div className="players-search-list-item">
        <div className="players-search-list-item__left-part">
          <div className="players-search-list-item__player-nickname">{nickname}</div>
          <div className="players-search-list-item__player-info">
            <div className="players-search-list-item__player-battles">
              <div className="players-search-list-item__player-battles-text">{allBattles}</div>
              <div className="players-search-list-item__player-battles-icon" />
              <div className="players-search-list-item__player-battles-percent">
                {`${battlesPercent}%`}
              </div>
            </div>
          </div>
        </div>
        <div className="players-search-list-item__right-part">
          <div className="players-search-list-item__personal-rating-image" />
          <div className="players-search-list-item__personal-rating-text">
            {globalRating}
          </div>
        </div>
      </div>
    );
  }
}

PlayerSearchListItem.propTypes = {
  nickname: PropTypes.string.isRequired,
  allBattles: PropTypes.number.isRequired,
  battlesPercent: PropTypes.number.isRequired,
  globalRating: PropTypes.number.isRequired,
};

export default PlayerSearchListItem;

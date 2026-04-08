import PropTypes from 'prop-types';
import "./FriendList.css"

export const FriendList = props => {
  return (
    <ul className="friend-list">
      {props.friends.map(friend => {
        return (
          <li className="fl-item" key={friend.id}>
            <span className={!!friend.isOnline ? "fl-status online" : "fl-status offline"}>&#9632;</span>
            <img className="fl-avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="fl-name">{friend.name}</p>
          </li>
        );
      })}   
    </ul>
  );
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired
} 
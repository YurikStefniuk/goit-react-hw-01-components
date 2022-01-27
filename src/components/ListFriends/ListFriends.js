import React from 'react';
import FriendListItem from './ListFriendItem';
import PropTypes from 'prop-types';
import styles from './ListFriends.module.css';
export default function ListFriends({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
ListFriends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListFriends.module.css';
const ListFriends = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ isOnline, avatar, name, id }) => (
        <li className={styles.item} key={id}>
          <span
            className={isOnline ? styles.statusOnline : styles.statusOffline}
          ></span>
          <img className={styles.avatar} src={avatar} alt="" width="48" />
          <p className={styles.name}> {name}</p>
        </li>
      ))}
    </ul>
  );
};

ListFriends.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};

export default ListFriends;

// const ListFriends = ({friends}) => {
//     return (
//                 <ul class="friend-list">
//             {friends.map(({avatar,name,id}) =>
//                 <li class="item" id={id}>
//                     <span class="status"></span>
//                     <img class="avatar" src={avatar} alt="" width="48" />
//                     <p class="name"> {name}</p>
//                 </li>)}
//         </ul>
//     )
// }

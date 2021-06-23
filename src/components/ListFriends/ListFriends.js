import React from 'react'
import PropTypes from 'prop-types'

const ListFriends = ({friends}) => {
    return (
                <ul class="friend-list">
            {friends.map(({avatar,name,id}) =>
                <li class="item" key={id}>
                    <span class="status"></span>
                    <img class="avatar" src={avatar} alt="" width="48" />
                    <p class="name"> {name}</p>
                </li>)}
        </ul>
    )
}

ListFriends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
        }),
    ),
  }


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
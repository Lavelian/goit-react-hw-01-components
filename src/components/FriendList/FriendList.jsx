import FriendListItem from 'components/FriendListItem/FriendListItem';
import { Gallery } from './FriendList.styled';
export default function Friend({ friends }) {
  return (
    <Gallery>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </Gallery>
  );
}

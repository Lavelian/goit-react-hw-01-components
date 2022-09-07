import { ItemGallery, Status, Img, FriendName } from './FriendListItem.styled';
export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <ItemGallery>
      <Status>{isOnline}</Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <FriendName> {name} </FriendName>
    </ItemGallery>
  );
}

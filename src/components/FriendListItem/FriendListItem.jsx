import { Avatar, Item, Name, Status } from './FriendListItem.styles';

const FriendListItem = ({ clientAvatar, clientName, status }) => {
  return (
    <Item>
      <Status $status={status}></Status>
      <Avatar src={clientAvatar} alt="User avatar" width="48" />
      <Name>{clientName}</Name>
    </Item>
  );
};

export default FriendListItem;

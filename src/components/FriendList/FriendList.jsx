import FriendListItem from 'components/FriendListItem/FriendListItem';
import { List } from './FriendList.styles';

const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          clientAvatar={avatar}
          clientName={name}
          status={isOnline}
        />
      ))}
    </List>
  );
};

export default FriendList;

import {
  Avatar,
  Card,
  Description,
  Info,
  Item,
  Label,
  List,
  Name,
  Quantity,
} from './Profile.styles';

const Profile = ({ data }) => {
  const { avatar, username, tag, location, stats } = data;
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </Description>

      <List>
        <Item>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </Item>
        <Item>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </Item>
      </List>
    </Card>
  );
};

export default Profile;

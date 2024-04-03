import info from '../Data/user.json';
import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import data from '../Data/data.json';
import FriendList from './FriendList/FriendList';
import friends from '../Data/friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../Data/transactions.json';
import Wrapper from './Wrapper/Wrapper';

export const App = () => {
  return (
    <Wrapper>
      <Profile data={info} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
};

import Profile from 'components/Profile/Profile';
import Statistics from 'components/Statistics/Statistics';
import FriendList from 'components/FriendList/FriendList';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';

import { AppContainer } from './App.styled';

import user from '../service/user.json';
import data from '../service/data.json';
import friends from '../service/friends.json';
import transacrtion from '../service/transactions.json';

export const App = () => {
  return (
    <AppContainer>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory item={transacrtion} />
    </AppContainer>
  );
};

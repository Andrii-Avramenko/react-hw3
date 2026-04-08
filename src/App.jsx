import { Profile } from './components/Profile';
import { Statistics } from './components/Statistics';
import { FriendList } from 'components/FriendList';
import { TransactionsHistory } from 'components/TransactionsHistory';

import userData from './user.json';
import data from './data.json';
import friends from './friends.json';
import transactions from './transactions.json'


export const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </>
  );
};

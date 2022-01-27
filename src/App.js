import React from 'react';

import Profile from './components/Profile/profile';
import user from './storage/user.json';

import Statistic from './components/Statistic/statistic';
import StatisticalData from './storage/statistical-data.json';

import ListFriends from './components/ListFriends/ListFriends';
import friends from './storage/friends.json';

import Transactions from './storage/transactions.json';
import TransactionHistory from './components/TransactionHistory/transactionHistory';

const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistic title="Upload stats" stats={StatisticalData} />
      <ListFriends friends={friends} />
      <TransactionHistory items={Transactions} />
    </div>
  );
};
export default App;

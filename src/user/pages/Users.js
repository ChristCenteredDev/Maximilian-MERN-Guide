import React from 'react';
import UsersList from '../components/UsersList';

const Users = () => {
  const USERS = [
    { id: 'u1', name: 'William Moon', image: 'https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinyrgb&dpr=2&h=750&w=1260', places: 3}
  ];

  return <UsersList items={USERS} />;
}

export default Users;
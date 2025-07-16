import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = 
    [
        {id: 'u1', 
            name: 'Max Verstappen', 
            image: 'https://i.pinimg.com/736x/d5/43/5a/d5435a7ab5b8756ae76b048f9c7967a4.jpg', 
            places: 8
        }
    ];
    return <UserList items={USERS}/>;
};

export default Users; 
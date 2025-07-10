import React from 'react';
import UserList from '../components/UserList';

const Users = () => {
    const USERS = 
    [
        {id: 'u1', 
            name: 'Max Verstappen', 
            image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2Fmax-verstappen-as-sid--823666219374560434%2F&psig=AOvVaw00aGNKPZbGGEXtlIoZn8ZL&ust=1752253879583000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPC4k8Lkso4DFQAAAAAdAAAAABAE', 
            places: 8
        }
    ];
    return <UserList items={USERS}/>;
};

export default Users; 
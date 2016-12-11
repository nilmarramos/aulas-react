import React from 'react';
import UserList from '../container/user-list';
import UserDetails from '../container/user-delails';
require('../../scss/style.scss');

const  App = () => (
    <div>
        <h2>UserName list:</h2>
        <UserList/>
        <hr/>
        <h2>User Details:</h2>
        <UserDetails/>
    </div>
);

export default App;
import React from 'react';

import TodoBuilder from '../../contatiner/TodoBuilder/TodoBuilder';

import classes from './Layout.module.css';

const Layout = () => (
    <div className = {classes.Layout}>
        <TodoBuilder />
    </div>
)

export default Layout;
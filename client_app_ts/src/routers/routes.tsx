import React from 'react';
import HomePage from '../views/HomePage/index';
import CreatePage from '../views/CreatePage/index';
import EditPage from '../views/EditPage/index';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/create',
        exact: false,
        main: () => <CreatePage />
    },
    {
        path: '/edit/:id',
        exact: false,
        main: (route: any) => <EditPage route={route} />
    },
    {
        path: '*',
        exact: false,
        main: () => <h1>Page not found</h1>
    }
]
export default routes;
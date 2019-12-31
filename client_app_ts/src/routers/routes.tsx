import React from 'react';
import {RouteComponentProps} from "react-router-dom";
import HomePage from '../views/HomePage/index';
import CreatePage from '../views/CreatePage/index';
import EditPage from '../views/EditPage/index';
type TParams = { id: string };
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
        main: ({match}: any) => <EditPage match={match} />
    },
    {
        path: '*',
        exact: false,
        main: () => <h1>Page not found</h1>
    }
]
export default routes;
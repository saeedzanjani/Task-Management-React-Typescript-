import React from 'react';
import { RouteObject } from '../DTOs/interfaces/ITodo';
import Edit from '../pages/edit/Edit';
import Home from '../pages/home/Home';

export const routes:RouteObject[] = [
    {
        path: '/',
        exact: true,
        element: <Home />
    },
    {
        path: '/edit/:id',
        element: <Edit />
    },
]
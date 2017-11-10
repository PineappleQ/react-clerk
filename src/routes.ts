import { Table } from './pages/table/table';
import { Welcome } from './pages/welcome/welcome';

export const routes = [
    {
        path: '/welcome',
        component: Welcome
    },
    {
        path: '/table',
        component: Table
    }
];
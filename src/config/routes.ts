import RouteInterface from '../interfaces/route';
import HomePage from '../pages/HomePage';
import UserPage from '../pages/UserPage'

const routes: RouteInterface[] = [
  {
    path: '/',
    name: 'Home',
    auth: false,
    element: HomePage,
  },
  {
    path: '/users',
    name: 'User',
    auth: false,
    element: UserPage,
  },
];


export default routes;

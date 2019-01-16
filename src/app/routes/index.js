import HelloWorld from '../containers/HelloWorld';
import getInitialData from './getInitialData';
import services from '../lib/config/services';

const serviceRegex = Object.keys(services)
  .filter(serviceName => serviceName !== 'default')
  .join('|');

/*
 * This gets passed to universal-react-app which passes the regex on to react-router-config which seemingly doesn
 */
export const regexPath = `/:service(${serviceRegex})/:id?`;

const routes = [
  {
    path: regexPath,
    exact: true,
    component: HelloWorld,
    getInitialData,
  },
];

export default routes;

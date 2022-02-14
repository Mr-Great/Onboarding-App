export default interface RouteInterface {
  path: string;
  name: string;
  auth: boolean;
  element: any;
  props?: any;
}

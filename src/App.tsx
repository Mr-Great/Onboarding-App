import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './config/routes';

export interface AppInterface {}

const App: FC<AppInterface> = (props) => {
  return (
    <>
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={<route.element {...route.props} />}
            />
          );
        })}
      </Routes>
    </>
  );
};

export default App;

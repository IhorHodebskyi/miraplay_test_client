import { getGames } from 'api/api';
import { useQuery } from 'react-query';
import { Layout } from './Layout/Layout';
import { Navigate, Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

export const App = () => {
  const { data } = useQuery('coins', getGames);
  console.log(data);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={''} />

        <Route
          path="/register"
          element={<RestrictedRoute redirectTo="/login" component={''} />}
        />

        <Route
          path="/login"
          element={<RestrictedRoute redirectTo="/games" component={''} />}
        />

        <Route
          path="/games"
          element={<PrivateRoute redirectTo="/login" component={''} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};

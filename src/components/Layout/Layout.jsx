import Games from 'pages/Games/Games';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <main>
      <Games />
      <Outlet />
    </main>
  );
};

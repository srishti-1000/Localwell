import { Outlet } from 'react-router-dom';
import Topbar from './components/Topbar';

const Layout = () => (
  <>
    <Topbar />
    <Outlet />
    
  </>
);

export default Layout;
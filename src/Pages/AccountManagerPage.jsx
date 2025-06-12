import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar';
import AccountManager from '../components/AccountManager';

import { Outlet } from 'react-router-dom';

const AccountManagerPage = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />    
      <div className="flex flex-col flex-1">
        <Topbar />    //outlet mi aagia tool bar
        <AccountManager />
      </div>
    </div>
  );
};

export default AccountManagerPage;

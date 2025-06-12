import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Topbar from './components/Topbar';

const Layout = () => (
  <>
  
    <Topbar />
    <Outlet />
    
  </>
);

export default Layout;
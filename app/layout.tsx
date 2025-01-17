import 'bootstrap/dist/css/bootstrap.min.css';
import React, { ReactNode } from 'react';
import './globals.css'; // Adjust the path if necessary

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default Layout;


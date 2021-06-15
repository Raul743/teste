import { FC } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import { Main } from './styles';
import { BaseLayoutProps } from './types';

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <div id="layout-wrapper">
      <Header />
      <Sidebar />
      <Main className="main-content">
        <div className="page-content">
          <div className="container-fluid">{children}</div>
        </div>
        <Footer />
      </Main>
    </div>
  );
};

export default BaseLayout;

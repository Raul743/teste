import React from 'react';
import Head from 'next/head';
import { Container, Row, Col } from 'reactstrap';
// import { Container } from './styles';
import Breadcrumbs from '@components/Dashboard-default/breadCrumb';

//Import Components
import CardUser from '@components/DasboardSass/CardUser';
import CardWelcome from '@components/DasboardSass/CardWelcome';
import MiniWidget from '@components/DasboardSass/MiniWidget';
import Earning from '@components/DasboardSass/Earning';
import SalesAnalytics from '@components/DasboardSass/SalesAnalytics';
import TotalSellingProduct from '@components/DasboardSass/TotalSellingProduct';
import Tasks from '@components/DasboardSass/Tasks';
import ChatBox from '@components/DasboardSass/ChatBox';
const Dashboard: React.FC = () => {
  const reports = [
    {
      icon: 'bx bx-copy-alt',
      title: 'Orders',
      value: '1,452',
      badgeValue: '+ 0.2%',
      color: 'success',
      desc: 'From previous period',
    },
    {
      icon: 'bx bx-archive-in',
      title: 'Revenue',
      value: '$ 28,452',
      badgeValue: '+ 0.2%',
      color: 'success',
      desc: 'From previous period',
    },
    {
      icon: 'bx bx-purchase-tag-alt',
      title: 'Average Price',
      value: '$ 16.2',
      badgeValue: '0%',
      color: 'warning',
      desc: 'From previous period',
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Head>
          <title>Saas Dashboard | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
        </Head>
        <Container fluid>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Dashboards" breadcrumbItem="Saas" />

          {/* Card User */}
          <CardUser />

          <Row>
            {/* welcome card */}
            <CardWelcome />

            <Col xl="8">
              <Row>
                {/*mimi widgets */}
                <MiniWidget reports={reports} />
              </Row>
            </Col>
          </Row>

          <Row>
            {/* earning */}
            <Earning />

            {/* sales anytics */}
            <SalesAnalytics />
          </Row>

          <Row>
            {/* total selling product */}
            <TotalSellingProduct /> 

            {/* tasks */}
   <Tasks /> 
            {/* chat box */}
        <ChatBox /> 
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;

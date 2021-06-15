import React from 'react';
import Head from 'next/head';
// import { Container } from './styles';
import { Container, Row, Col } from 'reactstrap';

//Import Breadcrumb
import Breadcrumbs from '@components/Dashboard-default/breadCrumb';

//Import Components
import CardUser from '@components/DashboardCrypto/CardUser';
import CardWelcome from '@components/DashboardCrypto/CardWelcome';
import MiniWidget from '@components/DashboardCrypto/MiniWidget';
import WalletBalance from '../../client/components/DashboardCrypto/WalletBalance';
import OverView from '@components/DashboardCrypto/OverView';
import Transactions from '@components/DashboardCrypto/Transactions';
import Notifications from '@components/DashboardCrypto/Notifications';
import BuySell from '@components/DashboardCrypto/BuySell';
const Dashboard: React.FC = () => {
  const series1 = [{ name: 'BTC', data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14] }];
  const options1 = {
    chart: { sparkline: { enabled: !0 } },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#f1b44c'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [25, 100, 100, 100],
      },
    },
    tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
  };

  //Etherium Chart
  const series2 = [{ name: 'ETH', data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54] }];
  const options2 = {
    chart: { sparkline: { enabled: !0 } },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#3452e1'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [25, 100, 100, 100],
      },
    },
    tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
  };

  //LiteCoin Chart
  const series3 = [{ name: 'LTC', data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14] }];
  const options3 = {
    chart: { sparkline: { enabled: !0 } },
    stroke: { curve: 'smooth', width: 2 },
    colors: ['#50a5f1'],
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [25, 100, 100, 100],
      },
    },
    tooltip: { fixed: { enabled: !1 }, x: { show: !1 }, marker: { show: !1 } },
  };

  const reports = [
    {
      title: 'Bitcoin',
      icon: 'mdi mdi-bitcoin',
      color: 'warning',
      value: '$ 9134.39',
      desc: '+ 0.0012 ( 0.2 % )',
      series: series1,
      options: options1,
      arrowUpDown: 'mdi mdi-arrow-up ms-1 text-success',
    },
    {
      title: 'Ethereum',
      icon: 'mdi mdi-ethereum',
      color: 'primary',
      value: '$ 245.44',
      desc: '- 4.102 ( 0.1 % )',
      series: series2,
      options: options2,
      arrowUpDown: 'mdi mdi-arrow-down ms-1 text-danger',
    },
    {
      title: 'litecoin',
      icon: 'mdi mdi-litecoin',
      color: 'info',
      value: '$ 63.61',
      desc: '+ 1.792 ( 0.1 % )',
      series: series3,
      options: options3,
      arrowUpDown: 'mdi mdi-arrow-up ms-1 text-success',
    },
  ];
  return (
    <div className="page-content">
      <Head>
        <title> Crypto Dashboard | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
      </Head>
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Dashboards" breadcrumbItem="Crypto" />
        <Row>
          <CardUser />

          <Col xl="8">
            <CardWelcome />

            <Row>
              <MiniWidget reports={reports} />
            </Row>
          </Col>
        </Row>

        <Row>
          <WalletBalance />

          <OverView />
        </Row>

        <Row>
          <Transactions />

          <Notifications />

          <BuySell />
        </Row>
      </Container>
    </div>
  );
};

export default Dashboard;

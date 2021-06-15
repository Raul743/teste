import { FC, useEffect, useState } from 'react';
import Head from 'next/head';
import {
  Container,
  Row,
  Col,
  Card,
  Media,
  CardBody,
  Table,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Input,
} from 'reactstrap';
import PageContent from '@components/Dashboard-default/MonthlyEarning/pageContent/index';
import Breadcrumbs from '@components/Dashboard-default/breadCrumb';
import WelcomeComp from '@components/Dashboard-default/WelcomeComp';
import MonthlyEarning from '@components/Dashboard-default/MonthlyEarning';
import { reportsType, emaiType } from './types';
import Link from 'next/link';
import StackedColumnChart from '@components/Dashboard-default/StackedColumnChart';
import SocialSource from '@components/Dashboard-default/SocialSource';
import ActivityComp from '@components/Dashboard-default/ActivityComp';
import TopCities from '@components/Dashboard-default/TopCities';
import LatestTranaction from '@components/Dashboard-default/LatestTranaction';
const DashboardDefault: FC = () => {
  const [modal, setmodal] = useState<boolean>(false);
  const [subscribemodal, setSubscribemodal] = useState<boolean>(false);

  const reports = [
    { title: 'Orders', iconClass: 'bx-copy-alt', description: '1,235' },
    { title: 'Revenue', iconClass: 'bx-archive-in', description: '$35, 723' },
    {
      title: 'Average Price',
      iconClass: 'bx-purchase-tag-alt',
      description: '$16.2',
    },
  ];

  const email = [
    { title: 'Week', linkto: '#', isActive: false },
    { title: 'Month', linkto: '#', isActive: false },
    { title: 'Year', linkto: '#', isActive: true },
  ];

  useEffect(() => {
    setTimeout(() => {
      setSubscribemodal(true);
    }, 2000);
  }, []);

  return (
    <>
      <PageContent>
        <Head>
          <title> Dashboard | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
        </Head>
        <Container fluid>
          <Breadcrumbs title={'Dashboards'} breadcrumbItem={'Dashboard'} />
          <Row>
            <Col xl="4">
              <WelcomeComp />
              <MonthlyEarning />
            </Col>
            <Col xl="8">
              <Row>
                {reports.map((report: reportsType, key: number) => (
                  <Col md="4" key={'_col_' + key}>
                    <Card className="mini-stats-wid">
                      <CardBody>
                        <Media>
                          <Media body>
                            <p className="text-muted fw-medium">{report.title}</p>
                            <h4 className="mb-0">{report.description}</h4>
                          </Media>
                          <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                            <span className="avatar-title rounded-circle bg-primary">
                              <i className={'bx ' + report.iconClass + ' font-size-24'}></i>
                            </span>
                          </div>
                        </Media>
                      </CardBody>
                    </Card>
                  </Col>
                ))}
              </Row>
              <Card>
                <CardBody>
                  <div className="d-sm-flex flex-wrap">
                    <h4 className="card-title mb-4">Email Sent</h4>
                    <div className="ms-auto">
                      <ul className="nav nav-pills">
                        {email.map((mail: emaiType, key) => (
                          <li className="nav-item" key={'_li_' + key}>
                            <Link href={mail.linkto}>
                              <a className={mail.isActive ? 'nav-link active' : 'nav-link'}>
                                {mail.title}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {/* <div className="clearfix"></div> */}
                  <StackedColumnChart />
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl="4">
              <SocialSource />
            </Col>
            <Col xl="4">
              <ActivityComp />
            </Col>

            <Col xl="4">
              <TopCities />{' '}
            </Col>
          </Row>

          <Row>
            <Col lg="12">
              <LatestTranaction />
            </Col>
          </Row>
        </Container>
      </PageContent>
      <Modal
        isOpen={subscribemodal}
        role="dialog"
        autoFocus={true}
        centered={true}
        tabIndex={-1}
        data-toggle="modal"
        toggle={() => {
          setSubscribemodal(!subscribemodal);
        }}
      >
        <div className="modal-content">
          <div className="modal-header border-bottom-0">
            <ModalHeader
              toggle={() => {
                setSubscribemodal(!subscribemodal);
              }}
            ></ModalHeader>
          </div>
          <div className="modal-body">
            <div className="text-center mb-4">
              <div className="avatar-md mx-auto mb-4">
                <div className="avatar-title bg-light rounded-circle text-primary h1">
                  <i className="mdi mdi-email-open"></i>
                </div>
              </div>

              <div className="row justify-content-center">
                <div className="col-xl-10">
                  <h4 className="text-primary">Subscribe !</h4>
                  <p className="text-muted font-size-14 mb-4">
                    Subscribe our newletter and get notification to stay update.
                  </p>

                  <div className="input-group bg-light rounded">
                    <Input
                      type="email"
                      className="form-control bg-transparent border-0"
                      placeholder="Enter Email address"
                    />

                    <Button color="primary" type="button" id="button-addon2">
                      <i className="bx bxs-paper-plane"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered={true}
        className="exampleModal"
        tabIndex={-1}
        toggle={() => {
          setmodal(!modal);
        }}
      >
        <div className="modal-content">
          <ModalHeader
            toggle={() => {
              setmodal(!modal);
            }}
          >
            Order Details
          </ModalHeader>
          <ModalBody>
            <p className="mb-2">
              Product id: <span className="text-primary">#SK2540</span>
            </p>
            <p className="mb-4">
              Billing Name: <span className="text-primary">Neal Matthews</span>
            </p>

            <div className="table-responsive">
              <Table className="table table-centered table-nowrap">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src={'assets/images/product/img-4.png'} alt="" className="avatar-sm" />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">Wireless Headphone (Black)</h5>
                        <p className="text-muted mb-0">$ 225 x 1</p>
                      </div>
                    </td>
                    <td>$ 255</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <div>
                        <img src={'assets/images/product/img-7.png'} alt="" className="avatar-sm" />
                      </div>
                    </th>
                    <td>
                      <div>
                        <h5 className="text-truncate font-size-14">Hoodie (Blue)</h5>
                        <p className="text-muted mb-0">$ 145 x 1</p>
                      </div>
                    </td>
                    <td>$ 145</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <h6 className="m-0 text-right">Sub Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <h6 className="m-0 text-right">Shipping:</h6>
                    </td>
                    <td>Free</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <h6 className="m-0 text-right">Total:</h6>
                    </td>
                    <td>$ 400</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              type="button"
              color="secondary"
              onClick={() => {
                setmodal(!modal);
              }}
            >
              Close
            </Button>
          </ModalFooter>
        </div>
      </Modal>
    </>
  );
};

export default DashboardDefault;

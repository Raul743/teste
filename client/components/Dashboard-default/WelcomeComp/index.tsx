import React from 'react';
import Link from 'next/link';
// import { Container } from './styles';

import { Row, Col, Card, CardBody } from 'reactstrap';

//import profileImg from "../../assets/images/profile-img.png"
const WelcomeComp: React.FC = () => {
  return (
    <>
      <Card className="overflow-hidden">
        <div className="bg-primary bg-soft">
          <Row>
            <Col xs="7">
              <div className="text-primary p-3">
                <h5 className="text-primary">Welcome Back !</h5>
                <p>Skote Dashboard</p>
              </div>
            </Col>
            <Col xs="5" className="align-self-end">
              <img src={'/assets/images/profile-img.png'} alt="" className="img-fluid" />
            </Col>
          </Row>
        </div>
        <CardBody className="pt-0">
          <Row>
            <Col sm="4">
              <div className="avatar-md profile-user-wid mb-4">
                <img
                  src={'/assets/images/users/avatar-1.jpg'}
                  alt=""
                  className="img-thumbnail rounded-circle"
                />
              </div>
              <h5 className="font-size-15 text-truncate">Henry Price</h5>
              <p className="text-muted mb-0 text-truncate">UI/UX Designer</p>
            </Col>

            <Col sm="8">
              <div className="pt-4">
                <Row>
                  <Col xs="6">
                    <h5 className="font-size-15">125</h5>
                    <p className="text-muted mb-0">Projects</p>
                  </Col>
                  <Col xs="6">
                    <h5 className="font-size-15">$1245</h5>
                    <p className="text-muted mb-0">Revenue</p>
                  </Col>
                </Row>
                <div className="mt-4">
                  <Link href="">
                    <a className="btn btn-primary waves-effect waves-light btn-sm">
                      View Profile <i className="mdi mdi-arrow-right ms-1"></i>
                    </a>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </>
  );
};

export default WelcomeComp;

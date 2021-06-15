import React, { useState } from 'react';

// import { Container } from './styles';
import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

//Import Images

const CardUser: React.FC = () => {
  const [settings_Menu, setSettings] = useState(false);
  function toggleSettings() {
    setSettings(!settings_Menu);
  }
  return (
    <React.Fragment>
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <Row>
                <Col lg="4">
                  <Media>
                    <div className="me-3">
                      <img
                        src={'/assets/images/users/avatar-1.jpg'}
                        alt=""
                        className="avatar-md rounded-circle img-thumbnail"
                      />
                    </div>
                    <Media className="align-self-center" body>
                      <div className="text-muted">
                        <p className="mb-2">Welcome to Skote Dashboard</p>
                        <h5 className="mb-1">Henry wells</h5>
                        <p className="mb-0">UI / UX Designer</p>
                      </div>
                    </Media>
                  </Media>
                </Col>

                <Col lg="4" className="align-self-center">
                  <div className="text-lg-center mt-4 mt-lg-0">
                    <Row>
                      <Col xs="4">
                        <div>
                          <p className="text-muted text-truncate mb-2">Total Projects</p>
                          <h5 className="mb-0">48</h5>
                        </div>
                      </Col>
                      <Col xs="4">
                        <div>
                          <p className="text-muted text-truncate mb-2">Projects</p>
                          <h5 className="mb-0">40</h5>
                        </div>
                      </Col>
                      <Col xs="4">
                        <div>
                          <p className="text-muted text-truncate mb-2">Clients</p>
                          <h5 className="mb-0">18</h5>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>

                <Col lg="4" className="d-none d-lg-block">
                  <div className="clearfix mt-4 mt-lg-0">
                    <Dropdown isOpen={settings_Menu} toggle={toggleSettings} className="float-end">
                      <DropdownToggle tag="button" className="btn btn-primary">
                        <i className="bx bxs-cog align-middle me-1" /> Setting
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem href="#">Action</DropdownItem>
                        <DropdownItem href="#">Another action</DropdownItem>
                        <DropdownItem href="#">Something else</DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default CardUser;

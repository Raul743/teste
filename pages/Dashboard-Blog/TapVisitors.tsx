import React from 'react';
import Link from "next/link"

import {
  Card,
  CardBody,
  Col,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  Row,
} from "reactstrap"

function TapVisitors() {
    return (
        <React.Fragment>
        <Col xl={4}>
          <Card>
            <CardBody>
              <div className="d-flex flex-wrap">
                <div className="ms-2">
                  <h5 className="card-title mb-3">Top Visitors</h5>
                </div>
                <UncontrolledDropdown className="ms-auto">
                  <DropdownToggle
                    className="text-muted font-size-16"
                    color="white"
                  >
                    <i className="mdi mdi-dots-horizontal"></i>
                  </DropdownToggle>
                  <DropdownMenu  className="dropdown-menu-end">
                    <Link href="#">
                      <a className="dropdown-item">
                        Acções
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="dropdown-item">
                        Outras acções
                      </a>
                    </Link>
                    <Link href="#">
                      <a className="dropdown-item">
                        Algo mais
                      </a>
                    </Link>
                    <div className="dropdown-divider"></div>
                    <Link href="#">
                      <a className="dropdown-item">
                        Link separado
                      </a>
                    </Link>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
              <Row className="text-center">
                <Col xs={6}>
                  <div className="mt-3">
                    <p className="text-muted mb-1">Today</p>
                    <h5>1024</h5>
                  </div>
                </Col>

                <Col xs={6}>
                  <div className="mt-3">
                    <p className="text-muted mb-1">This Month</p>
                    <h5>
                      12356{" "}
                      <span className="text-success font-size-13">
                        0.2 % <i className="mdi mdi-arrow-up ms-1"></i>
                      </span>
                    </h5>
                  </div>
                </Col>
              </Row>

              <hr />

              <div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="py-2">
                      <h5 className="font-size-14">
                        California <span className="float-end">78%</span>
                      </h5>
                      <div className="progress animated-progess progress-sm">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="py-2">
                      <h5 className="font-size-14">
                        Nevada <span className="float-end">69%</span>
                      </h5>
                      <div className="progress animated-progess progress-sm">
                        <div
                          className="progress-bar bg-warning"
                          role="progressbar"
                          style={{ width: "69%" }}
                        ></div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="py-2">
                      <h5 className="font-size-14">
                        Texas <span className="float-end">61%</span>
                      </h5>
                      <div className="progress animated-progess progress-sm">
                        <div
                          className="progress-bar bg-success"
                          role="progressbar"
                          style={{ width: "61%" }}
                        ></div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      </React.Fragment>
    );
}

export default TapVisitors;
import React, { useState } from 'react';

// import { Container } from './styles';
import { Col, Card, CardBody, Nav, NavItem, NavLink, Table, Input, Label } from 'reactstrap';
import Link from 'next/link';
import classnames from 'classnames';

//Simple bar
import SimpleBar from 'simplebar-react';

const Tasks: React.FC = () => {
  const [activeTab, setActiveTab] = useState('1');
  function toggleTab(tab: any) {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  }

  return (
    <React.Fragment>
      <Col xl="4">
        <Card>
          <CardBody>
            <h4 className="card-title mb-4">Tasks</h4>

            <Nav pills className="bg-light rounded">
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === '1',
                  })}
                  onClick={() => {
                    toggleTab('1');
                  }}
                >
                  In Process
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: activeTab === '2',
                  })}
                  onClick={() => {
                    toggleTab('2');
                  }}
                >
                  Upcoming
                </NavLink>
              </NavItem>
            </Nav>

            <div className="mt-4">
              <SimpleBar style={{ maxHeight: '250px' }}>
                <div className="table-responsive">
                  <Table className="table table-nowrap align-middle table-hover mb-0">
                    <tbody>
                      <tr>
                        <td style={{ width: '50px' }}>
                          <div className="form-check">
                            <Input
                              type="checkbox"
                              className="form-check-input"
                              id="customCheck1"
                              defaultChecked
                            />
                            <Label className="form-check-label" for="customCheck1" />
                          </div>
                        </td>
                        <td>
                          <h5 className="text-truncate font-size-14 mb-1">
                            <Link href="#">
                              <a className="text-dark">Skote Saas Dashboard</a>
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">Assigned to Mark</p>
                        </td>
                        <td style={{ width: '90px' }}>
                          <div>
                            <ul className="list-inline mb-0 font-size-16">
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </a>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check">
                            <Input type="checkbox" className="form-check-input" id="customCheck2" />
                            <Label className="form-check-label" for="customCheck2" />
                          </div>
                        </td>
                        <td>
                          <h5 className="text-truncate font-size-14 mb-1">
                            <Link href="#">
                              <a className="text-dark">New Landing UI</a>
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">Assigned to Team A</p>
                        </td>
                        <td>
                          <div>
                            <ul className="list-inline mb-0 font-size-16">
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </a>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check">
                            <Input type="checkbox" className="form-check-input" id="customCheck3" />
                            <Label className="form-check-label" for="customCheck3" />
                          </div>
                        </td>
                        <td>
                          <h5 className="text-truncate font-size-14 mb-1">
                            <Link href="#">
                              <a className="text-dark">Brand logo design</a>
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">Assigned to Janis</p>
                        </td>
                        <td>
                          <div>
                            <ul className="list-inline mb-0 font-size-16">
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </a>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check">
                            <Input type="checkbox" className="form-check-input" id="customCheck4" />
                            <Label className="form-check-label" for="customCheck4" />
                          </div>
                        </td>
                        <td>
                          <h5 className="text-truncate font-size-14 mb-1">
                            <Link href="#">
                              <a className="text-dark">Blog Template UI</a>
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">Assigned to Dianna</p>
                        </td>
                        <td>
                          <div>
                            <ul className="list-inline mb-0 font-size-16">
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </a>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>

                      <tr>
                        <td>
                          <div className="form-check">
                            <Input type="checkbox" className="form-check-input" id="customCheck5" />
                            <Label className="form-check-label" for="customCheck5" />
                          </div>
                        </td>
                        <td>
                          <h5 className="text-truncate font-size-14 mb-1">
                            <Link href="#">
                              <a className="text-dark">Multipurpose Landing</a>
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">Assigned to Team B</p>
                        </td>
                        <td>
                          <div>
                            <ul className="list-inline mb-0 font-size-16">
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </a>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <Input type="checkbox" className="form-check-input" id="customCheck6" />
                            <Label className="form-check-label" for="customCheck6" />
                          </div>
                        </td>
                        <td>
                          <h5 className="text-truncate font-size-14 mb-1">
                            <Link href="#">
                              <a className="text-dark">Redesign - Landing page</a>
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">Assigned to Jerry</p>
                        </td>
                        <td>
                          <div>
                            <ul className="list-inline mb-0 font-size-16">
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </a>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <div className="form-check">
                            <Input type="checkbox" className="form-check-input" id="customCheck7" />
                            <Label className="form-check-label" for="customCheck7" />
                          </div>
                        </td>
                        <td>
                          <h5 className="text-truncate font-size-14 mb-1">
                            <Link href="#">
                              <a className="text-dark">Skote Crypto Dashboard</a>
                            </Link>
                          </h5>
                          <p className="text-muted mb-0">Assigned to Eric</p>
                        </td>
                        <td>
                          <div>
                            <ul className="list-inline mb-0 font-size-16">
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-success p-1">
                                    <i className="bx bxs-edit-alt" />
                                  </a>
                                </Link>
                              </li>
                              <li className="list-inline-item">
                                <Link href="#">
                                  <a className="text-danger p-1">
                                    <i className="bx bxs-trash" />
                                  </a>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              </SimpleBar>
            </div>
          </CardBody>

          <div className="card-footer bg-transparent border-top">
            <div className="text-center">
              <Link href="#">
                <a className="btn btn-primary waves-effect waves-light"> Add new Task</a>
              </Link>
            </div>
          </div>
        </Card>
      </Col>
    </React.Fragment>
  );
};

export default Tasks;

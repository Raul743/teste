import React, { useState } from "react";
import {
  FormGroup,
  Label,
  NavItem,
  Col,
  NavLink,
  Progress,
  TabContent,
  TabPane,
  Button,
  Form,
  Input,
  Row,
} from "reactstrap";
import Link from "next/link";
import { CenterModal } from "../../client/components/Global/Modal/CenterModal";
import classnames from "classnames";

export default function FiltroEnderecamento() {
  const [activeTab, setactiveTab] = useState(1);
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(25);

  function toggleTab(tab) {
    if (activeTab !== tab) {
      if (tab >= 1 && tab <= 2) {
        setactiveTab(tab);
      }
    }
  }

  function toggleTabProgress(tab) {
    if (activeTabProgress !== tab) {
      if (tab >= 1 && tab <= 2) {
        setactiveTabProgress(tab);

        if (tab === 1) {
          setprogressValue(50);
        }
        if (tab === 2) {
          setprogressValue(100);
        }
      }
    }
  }

  return (
    <>
      <FormGroup className="mb-12" row>
        <Label htmlFor="billing-name" md="7" className="col-form-label">
          <span>
            <CenterModal
              buttonName="Adicionar"
              title="Adicionar novo catálogo de endereços"
            >
              <div className="wizard clearfix">
                <div className="steps clearfix">
                  <ul>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTabProgress === 1,
                        })}
                        onClick={() => {
                          toggleTabProgress(1);
                        }}
                      >
                        <span className="number">01.</span> Catálogo
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTabProgress === 2,
                        })}
                        onClick={() => {
                          toggleTabProgress(2);
                        }}
                      >
                        <span className="number">02.</span>
                        <span>Contatos</span>
                      </NavLink>
                    </NavItem>
                  </ul>
                  {/*//*================================================*/}
                  <div id="bar" className="mt-4">
                    <Progress
                      color="success"
                      striped
                      animated
                      value={progressValue}
                    />
                    <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" />
                  </div>
                  <TabContent
                    activeTab={activeTabProgress}
                    className="twitter-bs-wizard-tab-content"
                  >
                    <TabPane tabId={1}>
                      <Form className="mt-4">
                        <FormGroup className="mb-4" row>
                          <Label
                            htmlFor="billing-phone"
                            className="col-form-label"
                          >
                            Nome do catálogo de endereços:
                          </Label>
                          <Col md={12}>
                            <input
                              type="text"
                              className="form-control"
                              id="billing-phone"
                              placeholder="Catálogo"
                            />
                          </Col>
                        </FormGroup>
                      </Form>
                    </TabPane>

                    <TabPane tabId={2}>
                      <div>
                        <Form className="mt-4">
                          <FormGroup className="mb-4" row>
                            <Label
                              htmlFor="billing-phone"
                              className="col-form-label"
                            >
                              E-mail:
                            </Label>
                            <Col md={12}>
                              <input
                                type="email"
                                className="form-control"
                                id="billing-phone"
                                placeholder="E-mail"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup className="mb-4" row>
                            <Label
                              htmlFor="billing-phone"
                              className="col-form-label"
                            >
                              Telefone:
                            </Label>
                            <Col md={12}>
                              <input
                                type="tel"
                                className="form-control"
                                id="billing-phone"
                                placeholder="Telefone"
                              />
                            </Col>
                          </FormGroup>
                          <FormGroup className="mb-4" row>
                            <Label
                              htmlFor="billing-phone"
                              className="col-form-label"
                            >
                              Nome:
                            </Label>
                            <Col md={12}>
                              <input
                                type="text"
                                className="form-control"
                                id="billing-phone"
                                placeholder="Nome"
                              />
                            </Col>
                          </FormGroup>
                        </Form>
                      </div>
                    </TabPane>
                  </TabContent>

                  <div className="actions clearfix">
                    <ul>
                      <li>
                        <Link href="1">
                          <a className="btn btn-secondary">Canselar</a>
                        </Link>
                      </li>
                      <li>
                        <Link href="2">
                          <a className="btn btn-primary">Adicionar</a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CenterModal>
          </span>
        </Label>
      </FormGroup>
    </>
  );
}

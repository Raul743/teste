import React, { useState } from "react";

import {
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  NavItem,
  NavLink,
  Progress,
  Row,
  TabContent,
  TabPane,
  CardTitle,
  Button,
} from "reactstrap";
import classnames from "classnames";
import Select from "react-select";
import Link from "next/link";
import TabelaContatos from "./TabelaContatos";

export default function Wizard() {
  //!FormWizard

  const [activeTab, setactiveTab] = useState(1);
  const [activeTabProgress, setactiveTabProgress] = useState(1);
  const [progressValue, setprogressValue] = useState(50);

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

  //*Select Form
  const optionGroup = [
    {
      label: "Picnic",
      options: [
        { label: "Grupo do Aniceto", value: "grupo" },
        { label: "Meu grupo", value: "meu" },
        { label: "Novo grupo", value: "novo" },
      ],
    }
  ];

  const [selectedGroup, setselectedGroup] = useState(null);
  const [selectedMulti, setselectedMulti] = useState(null);

  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }

  function handleMulti(selectedMulti) {
    setselectedMulti(selectedMulti);
  }

  return (
    <>
      {/*//?=============================================================*/}
      <Label htmlFor="billing-name" md="3" className="col-form-label">
        <CardTitle>Catálogo de endereços: </CardTitle>
      </Label>
      <Label htmlFor="billing-name" md="6" className="col-form-label">
        <Select
          value={selectedGroup}
          onChange={(s) => {
            handleSelectGroup(s);
          }}
          options={optionGroup}
          placeholder="Selecione o catálogo"
          classNamePrefix="select2-selection"
        />
      </Label>

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
                <span className="number">01.</span> Contatos
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
                <span>Adicionar</span>
              </NavLink>
            </NavItem>
          </ul>
          {/*//*================================================*/}
          <div id="bar" className="mt-4">
            <Progress color="success" striped animated value={progressValue} />
            <div className="progress-bar bg-success progress-bar-striped progress-bar-animated" />
          </div>
          <TabContent
            activeTab={activeTabProgress}
            className="twitter-bs-wizard-tab-content"
          >
            <TabPane tabId={1}>
              <TabelaContatos />
            </TabPane>

            <TabPane tabId={2}>
              <div>
                <Form className="mt-4">
                  <FormGroup className="mb-4" row>
                    <Label
                      htmlFor="billing-phone"
                      md="2"
                      className="col-form-label"
                    >
                      E-mail:
                    </Label>
                    <Col md={10}>
                      <input
                        type="text"
                        className="form-control"
                        id="billing-phone"
                        placeholder="E-mail"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="mb-4" row>
                    <Label
                      htmlFor="billing-phone"
                      md="2"
                      className="col-form-label"
                    >
                      Telefone:
                    </Label>
                    <Col md={10}>
                      <input
                        type="text"
                        className="form-control"
                        id="billing-phone"
                        placeholder="Teleone"
                      />
                    </Col>
                  </FormGroup>
                  <FormGroup className="mb-4" row>
                    <Label
                      htmlFor="billing-phone"
                      md="2"
                      className="col-form-label"
                    >
                      Nome:
                    </Label>
                    <Col md={10}>
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

              
              <div className="actions clearfix">
            <ul>
              <li>
                <Link href="1">
                  <a
                    className="btn btn-success"
                  >
                    Limpar
                  </a>
                </Link>
              </li>
              <li >
                <Link href="2">
                  <a
                    className="btn btn-primary"
                  >
                    Adicionar
                  </a>
                </Link>
              </li>
            </ul>
          </div>
            </TabPane>
          </TabContent>

         
        </div>
      </div>
    </>
  );
}

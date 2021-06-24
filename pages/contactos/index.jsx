import React, { useState } from "react";
import MetaTags from "react-meta-tags";

import {
  Container,
  Row,
  Col,
  Nav,
  NavItem,
  TabContent,
  TabPane,
  Card,
  CardBody,
} from "reactstrap";
import Link from "next/link";

//Import Breadcrumb
import Breadcrumbs from "../../client/components/Dashboard-default/breadCrumb";

//Import Images
import Wizard from "./Wizard";
import FiltroEnderecamento from "./FiltroEnderecamento";
//import SMS from "./SMS";
import TabelaRelatorio from "./DataTables";

function ListaEnderecameto() {
  const [activeTab, setactiveTab] = useState("1");

  return (
    <>
      <MetaTags>
        <title>Campanha | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Campanha" breadcrumbItem="TODAS AS CAMPANHAS" />

        <div className="checkout-tabs">
          <Row>
            <Col xl="2" sm="3">
              <Nav className="flex-column" pills>
                <NavItem>
                  <nav
                    onClick={() => {
                      setactiveTab("1");
                    }}
                    style={{ color: activeTab === "1" ? "green" : "" }}
                  >
                    <span>
                      <i className="bx bxs-contact d-block check-nav-icon mt-2 mb-2" />
                      <p className="font-weight-bold mb-4">
                        Nova lista de endereçamento
                      </p>
                    </span>
                  </nav>
                </NavItem>
              </Nav>
            </Col>

            <Col xl="2" sm="3">
              <Nav className="flex-column" pills>
                <NavItem>
                  <nav
                    onClick={() => {
                      setactiveTab("2");
                    }}
                    style={{ color: activeTab === "2" ? "green" : "" }}
                  >
                    <i className="mdi mdi-account-multiple d-block check-nav-icon mt-2 mb-2" />
                    <p className="font-weight-bold mb-4">Contatos</p>
                  </nav>
                </NavItem>
              </Nav>
            </Col>

            <Col xl="12" sm="12">
              <Card>
                <CardBody>
                  <TabContent activeTab={activeTab}>
                    <TabPane tabId="1">
                      <FiltroEnderecamento />
                      <TabelaRelatorio />
                    </TabPane>

                    <TabPane
                      tabId="2"
                      id="v-pills-payment"
                      role="tabpanel"
                      aria-labelledby="v-pills-payment-tab"
                    >
                      <Card className="shadow-none border mb-0">
                        <CardBody>
                          <Wizard />
                        </CardBody>
                      </Card>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>

              <Row className="mt-4">
                <Col sm="6">
                  <Link href="/ecommerce-cart">
                    <a className="btn text-muted d-none d-sm-inline-block btn-link">
                      <i className="mdi mdi-arrow-left me-1" /> Back to Shopping
                      Cart
                    </a>
                  </Link>
                </Col>
                <Col sm="6">
                  <div className="text-sm-end">
                    <Link href="/ecommerce-checkout">
                      <a className="btn btn-success">
                        <i className="mdi mdi-truck-fast me-1" /> Proceed to
                        Shipping
                      </a>
                    </Link>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ListaEnderecameto;

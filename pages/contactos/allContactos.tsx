

// import { Container } from './styles';
import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { Card, CardBody, Col, Container, Row } from "reactstrap"
import paginationFactory, {
  PaginationListStandalone,
  PaginationProvider,
} from "react-bootstrap-table2-paginator"
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit"
import BootstrapTable from "react-bootstrap-table-next"
import Head from 'next/head';
//Import Breadcrumb
import Breadcrumbs from '@components/Dashboard-default/breadCrumb';




const Contactos: React.FC = () => {
  const { SearchBar } = Search
  return (
    <React.Fragment>
      <div className="page-content">
        <Head>
        <title>Contacts Users List | Skote - Responsive Bootstrap 5 Admin Dashboard</title>
      </Head>
        <Container fluid>
          {/* Render Breadcrumbs */}
          <Breadcrumbs title="Contacts" breadcrumbItem="Users List" />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <PaginationProvider
                    pagination={paginationFactory({})}
                  >
                    {({ paginationProps, paginationTableProps }) => (
                      <ToolkitProvider
                        keyField="id"
                        data={[]}
                        columns={[]}
                        bootstrap4
                        search
                      >
                        {toolkitProps => (
                          <React.Fragment>
                            <Row className="mb-2">
                              <Col sm="4">
                                <div className="search-box ms-2 mb-2 d-inline-block">
                                  <div className="position-relative">
                                  {/** <SearchBar   />  */}
                                    <i className="bx bx-search-alt search-icon" />
                                  </div>
                                </div>
                              </Col>
                            </Row>
                {/**
                 *             <Row>
                              <Col xl="12">
                                <div className="table-responsive">
                                  <BootstrapTable
                                    
                                    remote
                                    bordered={false}
                                    striped={false}
                                    classes={
                                      "table align-middle table-nowrap table-hover"
                                    }
                                    headerWrapperClasses={"table-light"}
                                    
                                    onTableChange={()=>{}}
                                
                                  />
                                </div>
                              </Col>
                            </Row>
                 */}
                            <Row className="align-items-md-center mt-30">
                              <Col className="pagination pagination-rounded justify-content-center mb-2 inner-custom-pagination">
                                <PaginationListStandalone
                                  
                                />
                              </Col>
                            </Row>
                          </React.Fragment>
                        )}
                      </ToolkitProvider>
                    )}
                  </PaginationProvider>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Contactos;
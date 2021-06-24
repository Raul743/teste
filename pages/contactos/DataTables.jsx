import React from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody } from "reactstrap";
import  BDropDown from './BDropDown'

export default function TabelaRelatorio() {

  const data = {
    columns: [
      {
        label: "Nº",
        field: "name",
        sort: "asc",
        width: 4,
      },
      {
        label: "Catálogo de endereços",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "Endereços",
        field: "office",
        sort: "asc",
        width: 300,
      },
      {
        label: "Telefones",
        field: "telefones",
        sort: "asc",
        width: 300,
      },
      {
        label: "Data",
        field: "data",
        sort: "asc",
        width: 100,
      },
      {
        label: "Acções",
        field: "accoes",
        sort: "asc",
        width: 100,
      },
    ],
    rows: [
      {
        name: "1",
        position: "Aniceto José Jolela",
        office: "7",
        telefones: "4",
        data: "2011/04/25",
        accoes:<BDropDown/>,
      },
      {
        name: "2",
        position: "Accountant",
        office: "3",
        telefones: "0",
        data: "2011/07/25",
        accoes:<BDropDown/>,
      },
      {
        name: "3",
        position: "Junior Technical Author",
        office: "2",
        telefones: "20",
        data: "2009/01/12",
        accoes:<BDropDown/>,
      },
      {
        name: "4",
        position: "Senior Javascript Developer",
        office: "0",
        telefones: "12",
        data: "2012/03/29",
        accoes:<BDropDown/>,
      },
      {
        name: "5",
        position: "Accountant",
        office: "30",
        telefones: "9",
        data: "2008/11/28",
        accoes:<BDropDown/>,
      }
    ],
  };

  return (
    <>
      <Row>
        <Col className="col-12">
          <Card>
            <CardBody>
              <MDBDataTable responsive bordered data={data} />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  );
}

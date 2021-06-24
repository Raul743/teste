import React from "react";
import { MDBDataTable } from "mdbreact";
import { Row, Col, Card, CardBody, DropdownItem } from "reactstrap";
import {Dropleft} from "../../client/components/Global/DropDown/Dropleft"

export default function TabelaContatos() {

  const data = {
    columns: [
      {
        label: "Nº",
        field: "name",
        sort: "asc",
        width: 4,
      },
      {
        label: "Nome",
        field: "position",
        sort: "asc",
        width: 270,
      },
      {
        label: "E-mail",
        field: "office",
        sort: "asc",
        width: 300,
      },
      {
        label: "Telefone",
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
        office: "aniceto@gmail.com",
        telefones: "244935259317",
        data: "2011/04/25",
        accoes:<Dropleft>
          <DropdownItem>Editar</DropdownItem>
          <DropdownItem><i className="mdi mdi-delete-circle fa-lg" ></i></DropdownItem>
        </Dropleft>,
      },
      {
        name: "2",
        position: "Accountant",
        office: "3",
        telefones: "0",
        data: "2011/07/25",
        accoes:<Dropleft>
        <DropdownItem>Editar</DropdownItem>
        <DropdownItem>Excluir</DropdownItem>
      </Dropleft>,
      },
      {
        name: "3",
        position: "Junior Technical Author",
        office: "2",
        telefones: "20",
        data: "2009/01/12",
        accoes:<Dropleft>
        <DropdownItem>Editar</DropdownItem>
        <DropdownItem>Excluir</DropdownItem>
      </Dropleft>,
      },
      {
        name: "4",
        position: "Senior Javascript Developer",
        office: "0",
        telefones: "12",
        data: "2012/03/29",
        accoes:<Dropleft>
        <DropdownItem>Editar</DropdownItem>
        <DropdownItem>Excluir</DropdownItem>
      </Dropleft>,
      },
      {
        name: "5",
        position: "Accountant",
        office: "30",
        telefones: "9",
        data: "2008/11/28",
        accoes:<Dropleft>
        <DropdownItem>Editar</DropdownItem>
        <DropdownItem>Excluir</DropdownItem>
      </Dropleft>,
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

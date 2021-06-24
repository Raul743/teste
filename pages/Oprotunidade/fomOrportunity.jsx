import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Label,
  Form,
  CardBody,
  InputGroup,
} from "reactstrap";
import Select from "react-select";
//import { Editor } from "react-draft-wysiwyg";
import { AutoComplete, Input } from "antd";
//const Editors = dynamic(() => import("react-draft-wysiwyg"));
//const { Editor } = editor;
import Flatpickr from "react-flatpickr";

export default function Services() {
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)]
    );
  };

  const onSelect = (data) => {
    console.log("onSelect", data);
  };

  const onChange = (data) => {
    setValue(data);
  };
  const [selectedGroup, setselectedGroup] = useState(null);
  const optionGroup = [
    {
      label: "Picnic",
      options: [
        { label: "Mustard", value: "Mustard" },
        { label: "Ketchup", value: "Ketchup" },
        { label: "Relish", value: "Relish" },
      ],
    },
    {
      label: "Camping",
      options: [
        { label: "Tent", value: "Tent" },
        { label: "Flashlight", value: "Flashlight" },
        { label: "Toilet Paper", value: "Toilet Paper" },
      ],
    },
  ];
  function handleSelectGroup(selectedGroup) {
    setselectedGroup(selectedGroup);
  }
  return (
    <Container>
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">
          <i className="fa fa-plus-circle"></i> Nova Oportunidade
        </h5>
      </div>

      <div className="modal-body flex flex-wrap flex-space-between">
        <div className="rna-wrapper"></div>
      </div>
      <Form>
        <h3
          style={{
            width: "100%",
            backgroundColor: "#d3d3d3",
            MdBorderTop: "5px",
            paddingLeft: "10px",
            border: "1px",
            borderRadius: "3px",
          }}
        >
          Informações do Caso
        </h3>
        <Row>
          <Col xl="4">
            <Label>
              Proprietario da Oportunidade{" "}
              <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              Nome da oportunidade <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              Probabilidade (%) <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <Label>
              Tipo de Oportunidade <small className="text-danger">*</small>
            </Label>
            <Select
              value={selectedGroup}
              onChange={() => {
                handleSelectGroup();
              }}
              options={optionGroup}
              classNamePrefix="select2-selection"
            />
          </Col>
          <Col xl="4">
            <Label>
              Palco <small className="text-danger">*</small>
            </Label>
            <Select
              value={selectedGroup}
              onChange={() => {
                handleSelectGroup();
              }}
              options={optionGroup}
              classNamePrefix="select2-selection"
            />
          </Col>
          <Col xl="4">
            <Label>Data de Fecho</Label>
            <InputGroup>
              <Flatpickr
                className="form-control d-block"
                placeholder="dd M,yyyy"
                options={{
                  altInput: true,
                  altFormat: "F j, Y",
                  dateFormat: "Y-m-d",
                }}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row></Row>
        <h3
          style={{
            width: "100%",
            backgroundColor: "#d3d3d3",
            marginTop: "30px",
            paddingLeft: "10px",
            border: "1px",
            borderRadius: "3px",
          }}
        >
          Informações Adicionais
        </h3>
        <Row>
          <Col xl="6">
            <Label>
              Leads Fontes <small className="text-danger">*</small>
            </Label>
            <Select
              value={selectedGroup}
              onChange={() => {
                handleSelectGroup();
              }}
              options={optionGroup}
              classNamePrefix="select2-selection"
            />
          </Col>

          <Col xl="4">
            <Label>
              Proximo Passo <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
        </Row>

        <Row>
          <Col xl="12">
            <Label>
              Descreve <small className="text-danger">*</small>
            </Label>
            <textarea
              id="basicpill-address-input1"
              className="form-control"
              rows="2"
            />
          </Col>
        </Row>
        <Row>
          <Col xl="3" className="mt-3 ">
            <div className="float-right text-right mb-3 d-flex justify-content-between">
              <Button
                className="btn-icon btn-3"
                color="primary"
                size="sm"
                onClick={() => {}}
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-bag-17" />
                </span>
                <span className="btn-inner--text">salvar</span>
              </Button>
              <Button
                className="btn-icon btn-3"
                color="primary"
                size="sm"
                onClick={() => {}}
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-bag-17" />
                </span>
                <span className="btn-inner--text">Salvar e Novo</span>
              </Button>
              <Button
                className="btn-icon btn-3"
                color="primary"
                size="sm"
                onClick={() => {}}
              >
                <span className="btn-inner--icon">
                  <i className="ni ni-bag-17" />
                </span>
                <span className="btn-inner--text">Cancelar</span>
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

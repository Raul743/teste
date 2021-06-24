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
          <i className="fa fa-plus-circle"></i> Novo Caso
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
              Proprietario do caso <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              Numero do caso <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              Nome do contacto <small className="text-danger">*</small>
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
              Nome da Conta <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              Email <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              Codigo da Reclamação <small className="text-danger">*</small>
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
              Numero do Cliente <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="2">
            <Label>
              Dias Limite <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="2">
            <Label>
              SLA Global <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-color mw-100"
              type="color"
              defaultValue="#00ff00"
              id="example-color-input"
            />
          </Col>
          <Col xl="2">
            <Label>
              Dias limite<small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="2">
            <Label>
              SLA Resposta UE <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-color mw-100"
              type="color"
              defaultValue="#ffffff"
              id="example-color-input"
            />
          </Col>
        </Row>

        <Row>
          <Col xl="4">
            <Label>
              Agencia <small className="text-danger">*</small>
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
              Tipo de Cliente <small className="text-danger">*</small>
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
              Produto/serviço <small className="text-danger">*</small>
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
        </Row>
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
          <Col xl="4">
            <Label>
              Prioridade <small className="text-danger">*</small>
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
              Razão do caso <small className="text-danger">*</small>
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
              Origem de caso <small className="text-danger">*</small>
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
        </Row>
        <Row>
          <Col xl="4">
            <Label>
              Tipo de Caso <small className="text-danger">*</small>
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
              Canal <small className="text-danger">*</small>
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
              Departamento <small className="text-danger">*</small>
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
        </Row>

        <Row>
          <Col xl="4">
            <Label>
              Grau de Satisfação <small className="text-danger">*</small>
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
            <Label>Data de Abertura</Label>
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
          <Col xl="4">
            <Label>Data de fecho</Label>
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
        <Row>
          <Col xl="4">
            <Label>
              Estado <small className="text-danger">*</small>
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
              SubEstado<small className="text-danger">*</small>
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
        </Row>
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
          Informações de Desscrição
        </h3>
        <Row>
          <Col xl="4">
            <Label>
              Assunto <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
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

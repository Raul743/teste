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
  ModalBody,
} from "reactstrap";
import Select from "react-select";
//import { Editor } from "react-draft-wysiwyg";
import { AutoComplete, Input } from "antd";
//const Editors = dynamic(() => import("react-draft-wysiwyg"));
//const { Editor } = editor;
import Flatpickr from "react-flatpickr";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false }
);
export default function formModal() {
  const mockVal = (str, repeat = 1) => ({
    value: str.repeat(repeat),
  });
  const [value, setValue] = useState("");
  const [options, setOptions] = useState([]);

  const onSearch = (searchText) => {
    setOptions(
      !searchText
        ? []
        : [mockVal(searchfText), mockVal(searchText, 2), mockVal(searchText, 3)]
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
          <i className="fa fa-plus-circle"></i> Novo Contacto
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
          Informação do Contacto
        </h3>
        <Row>
          <Col xl="4">
            <Label>
              Proprietario do caso <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do caso"
            />
          </Col>
          <Col xl="4">
            <Label>
              Primeiro Nome <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Primeiro Nome"
            />
          </Col>
          <Col xl="4">
            <Label>
              Apelido <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Apelido"
            />
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <Label>
              Numero de Telefone <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Apelido"
            />
          </Col>
          <Col xl="4">
            <Label>
              Email <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Apelido"
            />
          </Col>
          <Col xl="4">
            <Label>
              Titulo <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="Apelido"
            />
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
              Nome da conta <small className="text-danger">*</small>
            </Label>
            <br />
            <AutoComplete
              options={options}
              style={{
                width: 315,
                borderRadius: "10px",
              }}
              onSelect={onSelect}
              onSearch={onSearch}
            >
              <Input.Search size="large" placeholder="relatorio" />
            </AutoComplete>
          </Col>

          <Col xl="4">
            <Label>
              Relatorio Para <small className="text-danger">*</small>
            </Label>
            <br />
            <AutoComplete
              options={options}
              style={{
                width: 315,
                borderRadius: "10px",
              }}
              onSelect={onSelect}
              onSearch={onSearch}
            >
              <Input.Search size="large" placeholder="Relatorio" />
            </AutoComplete>
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
          Informações de Enderço
        </h3>
        <Row>
          <Col xl="4">
            <Label>
              Rua Correspondencia <small className="text-danger">*</small>
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
              Cidade Correspondencia <small className="text-danger">*</small>
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
              Provincia Correspondencia <small className="text-danger">*</small>
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
              Pais <small className="text-danger">*</small>
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
              Continente <small className="text-danger">*</small>
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
              Codigo Postal da Correspondecia
              <small className="text-danger">*</small>
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
          Informações adicionais
        </h3>

        <Row>
          <Col xl="4">
            <Label>
              Fax <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do caso"
            />
          </Col>
          <Col xl="4">
            <Label>
              Telefone de Casa <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do caso"
            />
          </Col>
          <Col xl="4">
            <Label>
              Departamento <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do caso"
            />
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <Label>
              Assist. Telefone <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do caso"
            />
          </Col>
          <Col xl="4">
            <Label>
              Outro Telefone <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do caso"
            />
          </Col>
          <Col xl="4">
            <Label>Data de Aniversario</Label>
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
          Descrição da Informação
        </h3>
        <Row>
          <Col xl="12">
            <Label>
              Descreve <small className="text-danger">*</small>
            </Label>
            <ModalBody>
              <form>
                <Editor
                  toolbarClassName="toolbarClassName"
                  wrapperClassName="wrapperClassName"
                  editorClassName="editorClassName"
                />
              </form>
            </ModalBody>
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

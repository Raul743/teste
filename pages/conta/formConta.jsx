import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Label,
  Form,
  ModalBody,
} from "reactstrap";
import Select from "react-select";
//import { Editor } from "react-draft-wysiwyg";
import { AutoComplete, Input } from "antd";
import dynamic from "next/dynamic";
const Editor = dynamic(
  () => {
    return import("react-draft-wysiwyg").then((mod) => mod.Editor);
  },
  { ssr: false }
);

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
          <i className="fa fa-plus-circle"></i> Nova Conta
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
          Informação da Conta
        </h3>
        <Row>
          <Col xl="4">
            <Label>
              Proprietario da conta <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>

          <Col xl="4">
            <Label>
              Telefone <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do caso"
            />
          </Col>
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
        </Row>
        <Row>
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
              Conta Principal <small className="text-danger">*</small>
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
          <Col xl="4">
            <Label>
              Tipo de Conta <small className="text-danger">*</small>
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
              Produtor da Conta <small className="text-danger">*</small>
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
              Moeda da Conta <small className="text-danger">*</small>
            </Label>
            <Select
              value={selectedGroup}
              onChange={() => {
                handleSelectGroup();
              }}
              options={optionGroup}
              classNamePrefix="select2-selection"
              placeholder="Moeda (AO)"
            />
          </Col>
        </Row>
        <Row>
          <Col xl="4">
            <Label>
              Apelido da Conta <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do caso"
            />
          </Col>
          <Col xl="4">
            <Label>
              forma de Movimento <small className="text-danger">*</small>
            </Label>
            <Select
              value={selectedGroup}
              onChange={() => {
                handleSelectGroup();
              }}
              options={optionGroup}
              classNamePrefix="select2-selection"
              placeholder="Moeda (AO)"
            />
          </Col>
          <Col xl="4">
            <Label>
              Balcão <small className="text-danger">*</small>
            </Label>
            <Select
              value={selectedGroup}
              onChange={() => {
                handleSelectGroup();
              }}
              options={optionGroup}
              classNamePrefix="select2-selection"
              placeholder="Moeda (AO)"
            />
          </Col>
        </Row>
        <Row>
          <Col xl="8">
            <Label>
              Cotitular <small className="text-danger">*</small>
            </Label>
            <Select
              value={selectedGroup}
              onChange={() => {
                handleSelectGroup();
              }}
              options={optionGroup}
              classNamePrefix="select2-selection"
              placeholder="Moeda (AO)"
            />
          </Col>
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
              placeholder="Moeda (AO)"
            />
          </Col>
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
            Descrição
          </h3>
        </Row>
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

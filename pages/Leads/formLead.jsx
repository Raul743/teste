import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Label, Form } from "reactstrap";
import Select from "react-select";
//import { Editor } from "react-draft-wysiwyg";

//const Editors = dynamic(() => import("react-draft-wysiwyg"));
//const { Editor } = editor;

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
          <i className="fa fa-plus-circle"></i> Nova Lead
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
          Informações da Lead
        </h3>
        <Row>
          <Col xl="4">
            <Label>
              Proprietario da Lead <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              PRimeiro Nome <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              Apelido <small className="text-danger">*</small>
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
              Compania <small className="text-danger">*</small>
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
              Titulo <small className="text-danger">*</small>
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
              Telefone <small className="text-danger">*</small>
            </Label>
            <input
              className="form-control form-control-sm"
              type="text"
              placeholder="PRoprietario do conta"
            />
          </Col>
          <Col xl="4">
            <Label>
              Avaliação <small className="text-danger">*</small>
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
              Situação <small className="text-danger">*</small>
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
              Estado da Lead <small className="text-danger">*</small>
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

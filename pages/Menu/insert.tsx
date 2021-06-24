import React from "react";
import Background from "../../client/components/Global/Background/background";
//Global/Background/background
import Button from "@components/Button";
import { ModalContainer } from "@components/Global/Modal/styles";
import {
  ButtonGreen,
  ButtonRed,
  Container,
  ContainerButtons,
  Content,
  ContentInline,
  Header,
  Input,
  Label,
} from "./styles";
// import { Formik, Form } from "formik"
// import { Row, Col, CardBody, Card, Container } from "reactstrap"
// import { Input, Button } from "@components"

//../client/components

export default function Insert() {
  return (
    <>
      <Background />
      <Container>
        <Header>Cadastro de Menu</Header>
        <div>
          <Content>
            <Label>Icon</Label>
            <Input placeholder="Icon" />
          </Content>
          <Content>
            <Label>Menu</Label>
            <Input placeholder="Menu" />
          </Content>
          <Content>
            <Label>Submenu</Label>
            <Input placeholder="Submenu" />
          </Content>
        </div>
        <ContainerButtons>
          <ContentInline>
            <ButtonRed type="submit" value="Cancelar" />
          </ContentInline>
          <ContentInline>
            <ButtonGreen type="submit" value="Salvar" />
          </ContentInline>
        </ContainerButtons>
      </Container>
      {/* <ModalContainer>
           <Button title="Salvar" color="primary" /> 
      </ModalContainer> */}
    </>
    // <div>
    //   <Background />
    //   <div className="content">
    //     <div className="content-icon"></div>
    //   </div>
    //   <div className="content">
    //     <div className="content-info">
    //       <div className="menu"></div>
    //       <div className="submenu"></div>
    //     </div>
    //   </div>
    // </div>
  );
}

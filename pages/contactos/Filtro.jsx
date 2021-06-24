import React, { useState } from "react";
import {
  FormGroup,
  Label
} from "reactstrap";

export default function Filtro() {
  const [drp_secondary_sm, setDrp_secondary_sm] = useState(false);

  return (
    <>
     
      <FormGroup className="mb-4" row>
        <Label htmlFor="billing-name" md="2" className="col-form-label">
          <span style={{ color: "red" }}>0</span> <br /> Enviados
        </Label>
        <Label htmlFor="billing-name" md="2" className="col-form-label">
          <span>0</span> <br /> Entregues
        </Label>
        <Label htmlFor="billing-name" md="2" className="col-form-label">
          <span style={{ color: "blue" }}>0</span> <br /> Abertos
        </Label>
        <Label htmlFor="billing-name" md="2" className="col-form-label">
          <span style={{ color: "green" }}>0</span> <br /> Cliques
        </Label>
        <Label htmlFor="billing-name" md="2" className="col-form-label">
          <span style={{ color: "orange" }}>0</span> <br /> Inscrições
          canceladas
        </Label>
        <Label htmlFor="billing-name" md="2" className="col-form-label">
          <span style={{ color: "red" }}>0</span> <br /> Erros
        </Label>
      </FormGroup>
    </>
  );
}

import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  ButtonDropdown,
} from "reactstrap";

export default function BDropDown() {
  const [drp_secondary_sm, setDrp_secondary_sm] = useState(false);

  return (
    <div className="btn-group mb-2">
      <ButtonDropdown
        isOpen={drp_secondary_sm}
        toggle={() => setDrp_secondary_sm(!drp_secondary_sm)}
      >
        <DropdownToggle caret color="info" className="btn btn-info btn-sm">
          <i className="mdi mdi-dots-vertical" />
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>Criar campanha</DropdownItem>
          <DropdownItem>Adicionar emails</DropdownItem>
          <DropdownItem>Visão geral do catálogo de endereços</DropdownItem>
          <DropdownItem>Editar nome</DropdownItem>
          <DropdownItem>Verificar lista de endereçamento</DropdownItem>
          <DropdownItem>Excluir </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    </div>
  );
}

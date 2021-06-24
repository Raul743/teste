import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownToggle,
  ButtonDropdown,
  Container,
} from "reactstrap";

type DropleftPros={
    children:JSX.Element|React.ReactChild
}


export const Dropleft:React.FC<DropleftPros> = ({children}) => {
  const [drp_secondary_sm, setDrp_secondary_sm] = useState(false);

  return (
    <>
      <Container>
        <div className="btn-group mb-2">
          <ButtonDropdown
            isOpen={drp_secondary_sm}
            toggle={() => setDrp_secondary_sm(!drp_secondary_sm)}
          >
            <DropdownToggle caret color="info" className="btn btn-info btn-sm">
              <i className="mdi mdi-dots-vertical" />
            </DropdownToggle>
            <DropdownMenu>
                {children}
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </Container>
    </>
  );
};

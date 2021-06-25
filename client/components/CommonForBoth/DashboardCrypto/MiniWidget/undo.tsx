import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import dynamic from "next/dynamic";
import { reportsType } from "../../../../../pages/Dashboard-default/types";
type Props = {
  reports: reportsType;
  data: any;
};
const MiniWidget: React.FC<Props> = ({ reports }) => {
  return <h2>Hello</h2>;
};

export default MiniWidget;

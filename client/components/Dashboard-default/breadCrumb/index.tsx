import { FC } from 'react';
import { Row, Col, BreadcrumbItem } from 'reactstrap';
import Link from 'next/link';

import { braedProps } from './types';
// import { Container } from './styles';

const breadCrumb: FC<braedProps> = props => {
  return (
    <Row>
      <Col xs="12">
        <div className="page-title-box d-sm-flex align-items-center justify-content-between">
          <h4 className="mb-0 font-size-18">{props.breadcrumbItem}</h4>
          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <BreadcrumbItem>
                <Link href="">
                  <a>{props.title}</a>
                </Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>
                <Link href="#">
                  <a>{props.breadcrumbItem}</a>
                </Link>
              </BreadcrumbItem>
            </ol>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default breadCrumb;

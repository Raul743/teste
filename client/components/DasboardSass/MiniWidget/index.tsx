import React from 'react';
import { PropsReports, TypeReports } from './types';
// import { Container } from './styles';
import { Col, Card, CardBody } from 'reactstrap';
const MiniWidget: React.FC<PropsReports> = ({ reports }) => {
  return (
    <React.Fragment>
      {reports.map((report: TypeReports, key) => (
        <Col sm="4" key={key}>
          <Card>
            <CardBody>
              <div className="d-flex align-items-center mb-3">
                <div className="avatar-xs me-3">
                  <span className="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-18">
                    <i className={report.icon} />
                  </span>
                </div>
                <h5 className="font-size-14 mb-0">{report.title}</h5>
              </div>
              <div className="text-muted mt-4">
                <h4>
                  {report.value} <i className="mdi mdi-chevron-up ms-1 text-success" />
                </h4>
                <div className="d-flex">
                  <span className={'badge badge-soft-' + report.color + ' font-size-12'}>
                    {' '}
                    {report.badgeValue}{' '}
                  </span>{' '}
                  <span className="ms-2 text-truncate">{report.desc}</span>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </React.Fragment>
  );
};

export default MiniWidget;

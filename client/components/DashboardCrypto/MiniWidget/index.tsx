import React from 'react';

// import { Container } from './styles';
import { Row, Col, Card, CardBody } from 'reactstrap';
import dynamic from 'next/dynamic';
import { reportsType } from '../../../../pages/Dashboard-default/types';
import { ReactNode } from 'react';
type RportType = {
  icon: string;
  color: string;
  title: string;
  value: any;
  desc: any;
  options: any;
  series: any;
  arrowUpDown: any;
};

type MiniWidgetProps = {
  reports: RportType[];
};
const ReactApexChart = dynamic(() => import('react-apexcharts'));
const MiniWidget: React.FC<MiniWidgetProps> = ({ reports }) => {
  return (
    <>
      {reports.map((report: RportType, key) => (
        <Col sm="4" key={key}>
          <Card>
            <CardBody>
              <p className="text-muted mb-4">
                <i
                  className={report.icon + ' h2 text-' + report.color + ' align-middle mb-0 me-3'}
                />{' '}
                {report.title}{' '}
              </p>

              <Row>
                <Col xs="6">
                  <div>
                    <h5>{report.value}</h5>
                    <p className="text-muted text-truncate mb-0">
                      {report.desc} <i className={report.arrowUpDown} />
                    </p>
                  </div>
                </Col>
                <Col xs="6">
                  <div>
                    <div>
                      []{' '}
                      <ReactApexChart
                        options={report.options}
                        series={report.series}
                        type="area"
                        height={40}
                        className="apex-charts"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default MiniWidget;

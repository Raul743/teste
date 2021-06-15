import { FC } from 'react';
import { Row, Col } from 'reactstrap';
import CombCharts from '../../components/Charts/Recharts/CombChart';
import PieTwoLevel from '../../components/Charts/Recharts/PieTwoLevel';
import StackedBar from '../../components/Charts/Recharts/StackedBar';
import SimpleChart from '../../components/Charts/Recharts/SimpleChart';
import PieCharts from '../../components/Charts/Recharts/PieCharts';
import LineSimpleChart from '../../components/Charts/Recharts/LineChart';
import { CardBodyView, CardView } from '../../components/CardView';
const Charts: FC = () => {
  return (
    <Row>
      <Col xl="6">
        <CardView>
          <CardBodyView>
            <CombCharts />
          </CardBodyView>
        </CardView>
      </Col>
      <Col xl="6">
        <CardView>
          <CardBodyView>
            <div>
              <PieTwoLevel />
            </div>
          </CardBodyView>
        </CardView>
      </Col>
      <Col xl="6">
        <CardView>
          <CardBodyView>
            <div>
              <StackedBar />
            </div>
          </CardBodyView>
        </CardView>
      </Col>
      <Col xl="6">
        <CardView>
          <CardBodyView>
            <div>
              <SimpleChart />
            </div>
          </CardBodyView>
        </CardView>
      </Col>
      <Col xl="6">
        <CardView>
          <CardBodyView>
            <div>
              <PieCharts />
            </div>
          </CardBodyView>
        </CardView>
      </Col>
      <Col xl="6">
        <CardView>
          <CardBodyView>
            <div>
              <LineSimpleChart />
            </div>
          </CardBodyView>
        </CardView>
      </Col>
    </Row>
  );
};
export default Charts;

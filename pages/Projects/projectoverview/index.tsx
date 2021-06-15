import { FC } from 'react';
import { Row, Col } from 'reactstrap';
import { CardView, CardBodyView } from '../../../components/CardView';
import UserList from '../../../components/UserList';
import AttachedFiles from '../../../components/AttachedFiles';
import { Title, HeaderAvatar, HeaderContent, Avatar, Content } from './styles';
import CombChart from '../../../components/Charts/Recharts/CombChart';
import { files, team } from './data';
const ProjectOverView: FC = () => {
  return (
    <>
      <Row>
        <Col xl="8">
          <CardView>
            <CardBodyView>
              <HeaderAvatar>
                <Avatar src="/images/companies/img-1.png" />
                <HeaderContent>
                  <Title>Skote Dashboard UI</Title>
                  <p>Separate existence is a myth. For science, music, sport, etc.</p>
                </HeaderContent>
              </HeaderAvatar>
              <Title>Project Details :</Title>
              <Content>
                To an English person, it will seem like simplified English, as a skeptical Cambridge
                friend of mine told me what Occidental is. The European languages are members of the
                same family. Their separate existence is a myth. For science, music, sport, etc,
              </Content>
              <Content>To achieve this, it would be necessary</Content>
              <Content>Separate existence is a myth.</Content>
              <Content> If several languages coalesce</Content>
              <Row>
                <Col sm="4" md="4">
                  <Title>Start Date</Title>
                  <Content>08 Sept, 2019</Content>
                </Col>
                <Col sm="4" md="4">
                  <Title> Due Date</Title>
                  <Content>12 Oct, 2019</Content>
                </Col>
              </Row>
            </CardBodyView>
          </CardView>
        </Col>
        <Col xl="4">
          <CardView>
            <CardBodyView>
              <UserList data={team} />
            </CardBodyView>
          </CardView>
        </Col>
      </Row>
      <Row>
        <Col>
          <CardView>
            <CardBodyView>
              <CombChart />
            </CardBodyView>
          </CardView>
        </Col>
        <Col>
          <CardView>
            <CardBodyView>
              <AttachedFiles data={files} />
            </CardBodyView>
          </CardView>
        </Col>
        <Col>
          <CardView>
            <CardBodyView></CardBodyView>
          </CardView>
        </Col>
      </Row>
    </>
  );
};
export default ProjectOverView;

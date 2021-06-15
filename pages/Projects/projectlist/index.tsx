import { FC } from 'react';
import ProjectListTable from '../../../components/ProjectListTable';
import { projects } from './data';
const ProjectList: FC = () => {
  return <ProjectListTable data={projects} />;
};
export default ProjectList;

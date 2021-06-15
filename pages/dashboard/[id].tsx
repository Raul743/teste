import { FC } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { Redirect } from '../../utils/Redirect';
//import { Redirect } from '../../utils/Redirect';
import BaseLayout from '@components/BaseLayout';
import { TasksList } from '../Tasks';
import DashboardDefault from '../Dashboard-default';
import DashboardSaas from '../Dashboard-Sass';
import DashboardCrypto from '../DashboardCrpto';
//import DashboardBlog from '../Dashboard-Blog';
import AllContactos from '../contactos/allContactos'
const Dasboard: FC = () => {
  const [session, loading] = useSession();
  const { query, pathname } = useRouter();
  const { id } = query;

  if (loading) {
    <h2>Loading...</h2>;
  }

  if (!session && pathname !== '/') {
    return <Redirect to="/" />;
  }

  // console.log('Query: ', query);
  function Layout() {
    switch (id) {
      case 'pessoa':
        return <DashboardDefault />;
      
        case 'saas':
          return <DashboardSaas />;

        case 'crypto':
          return <DashboardCrypto/>;
        
        case 'todos-contacto':
          return <AllContactos />   
      default:
        return <h1>Outras rotas</h1>;
    }
  }
  return (
    <BaseLayout>
      <Layout />
      {/* {<EmailInbox/>} */}
    </BaseLayout>
  );
};

export default Dasboard;

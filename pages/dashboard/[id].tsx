import { FC } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/client";
import { Redirect } from "../../utils/Redirect";
//import { Redirect } from '../../utils/Redirect';
import BaseLayout from "@components/BaseLayout";
import { TasksList } from "../Tasks";
import DashboardDefault from "../Dashboard-default";
import DashboardSaas from "../Dashboard-Sass";
import DashboardCrypto from "../DashboardCrpto";
//import DashboardBlog from '../Dashboard-Blog';

// importacao das contas
import ContaNova from "../conta/formConta";
import AllCount from "../conta/allConta";

// importacao dos contactos
import AllContactos from "../contactos";
import Modal from "../contactos/formModal";

//importacao das Leads
import LeadNova from "../Leads/formLead";
import AllLead from "../Leads/allLeads";

// importacao das Reclamaçoes
import ReclamacaoNova from "../Reclamacao/formReclamacao";

//importacao das oportunidades
import OprotunityNova from "../Oprotunidade/fomOrportunity";

//importacao dos menus
import MenuNovo from "../Menu/insert";

//importacoes do emails
import EmailIbox from "../Email/email-inbox";

const Dasboard: FC = () => {
  const [session, loading] = useSession();
  const { query, pathname } = useRouter();
  const { id } = query;

  if (loading) {
    <h2>Loading...</h2>;
  }

  //if (!session && pathname !== '/') {
  //  return <Redirect to="/" />;
  //}

  // console.log('Query: ', query);
  function Layout() {
    switch (id) {
      case "pessoa":
        return <DashboardDefault />;

      case "saas":
        return <DashboardSaas />;

      case "crypto":
        return <DashboardCrypto />;

      case "todos-contacto":
        return <AllContactos />;
      case "contacto-adicionar":
        return <Modal />;
      case "conta-adicionar":
        return <ContaNova />;
      case "lead-adicionar":
        return <LeadNova />;
      case "reclamacao-adicionar":
        return <ReclamacaoNova />;
      case "oportunidade-adicionar":
        return <OprotunityNova />;
      case "menu-adicionar":
        return <MenuNovo />;

      case "toda-leads":
        return <AllLead />;
      case "toda-conta":
        return <AllCount />;

      case "toda-tarefa":
        return <TasksList />;
      case "email-inbox":
        return <EmailIbox />;
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

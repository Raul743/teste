import { FC } from "react"
import { useRouter } from "next/router"
import { useSession } from "next-auth/client"
import { Redirect } from "../../utils/Redirect"
import EmailInbox from "../Email/email-inbox"
import EmailRead from "../Email/email-read"
import EmailBasicTemplte from "../Email/email-basic-templte"
import EmailAlertTemplte from "../Email/email-template-alert"
import EmailTemplateBilling from "../Email/email-template-billing"
import UiAlert from "../Ui/UiAlert"
import UiDropdown from "../Ui/UiDropDown"
import UiModal from "../Ui/UiModal"
//import { Redirect } from '../../utils/Redirect';
import BaseLayout from "@components/BaseLayout"
import { TasksList } from "../Tasks"
import DasboardDefault from "../Dashboard-default"
import DasboardCrypto from "../DashboardCrpto"
import DasboardSass from "../Dashboard-Sass"
import DashboardBlog from "../Dashboard-Blog"
const Dasboard: FC = () => {
  //const [session, loading] = useSession();
  const { query, pathname } = useRouter()
  const { id } = query

  console.log("Query: ", query)

  //if (loading) {
  //  <h3>Loading...</h3>;
  //}

  //if (!session && pathname !== '/') {
  //  return <Redirect to="/" />;
  //}

  function Layout() {
    switch (id) {
      case "DasboardSass":
        return <DasboardSass />

      case "DashboardBlog":
        return <DashboardBlog />

      case "DasboardCrypto":
        return <DasboardCrypto />

      default:
        return <DasboardDefault />
    }
  }

  return (
    <BaseLayout>
      <Layout />
    </BaseLayout>
  )
}

export default Dasboard

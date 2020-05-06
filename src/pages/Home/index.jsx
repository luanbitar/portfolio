import Layout from "components/Layout"
import Welcome from "pages/Home/components/Welcome"

import useHomeLogic from "./HomeLogic"

const HomePage = () => {
  useHomeLogic()

  return (
    <Layout>
      <Welcome />
      <h1>Hi people</h1>
    </Layout>
  )
}

export default HomePage

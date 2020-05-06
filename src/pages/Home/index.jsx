import Layout from "components/Layout"
import Welcome from "pages/Home/components/Welcome"
import HomeMetaTags from "pages/Home/components/HomeMetaTags"

const HomePage = () => {
  return (
    <Layout>
      <HomeMetaTags />
      <Welcome />
    </Layout>
  )
}

export default HomePage

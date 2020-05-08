import Layout from "components/Layout"
import HomeMetaTags from "pages/Home/components/HomeMetaTags"
import ThreeScene from "pages/Home/components/ThreeScene"
import Welcome from "pages/Home/components/Welcome"

const HomePage = () => {
  return (
    <Layout>
      <HomeMetaTags />
      <Welcome />
      <ThreeScene />
    </Layout>
  )
}

export default HomePage

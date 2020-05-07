import Layout from "components/Layout"
import Welcome from "pages/Home/components/Welcome"
import HomeMetaTags from "pages/Home/components/HomeMetaTags"
import ThreeScene from "pages/Home/components/ThreeScene"

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

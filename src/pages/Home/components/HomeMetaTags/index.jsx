import Helmet from "react-helmet"

function HomeMetaTags() {
  return (
    <Helmet>
      <title>Luan Bitar</title>
      <meta name="description" content="Hi, I'm a software developer." />
      <link rel="canonical" href="https://lbitar.com" />
    </Helmet>
  )
}

export default HomeMetaTags

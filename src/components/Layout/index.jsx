import "./Layout.scss"
import Helmet from "react-helmet"

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Luan Bitar" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://lbitar.com" />
        <meta
          property="og:image:secure_url"
          itemProp="image"
          content="https://lbitar.com/images/l.png"
        />
        <meta
          property="og:image"
          itemProp="image"
          content="https://lbitar.com/images/l.png"
        />
        <meta
          property="og:description"
          content="Hi, I'm a software developer."
        />
        <meta property="og:site_name" content="lbitar" />
        <script type="application/ld+json">
          {`{
            "@context": "https://schema.org",
            "@type": "Organization",
            "url": "https://lbitar.com",
            "logo": "https://lbitar.com/images/l.png"
          }`}
        </script>
      </Helmet>
      <div className="default-layout">{children}</div>
    </>
  )
}
export default Layout

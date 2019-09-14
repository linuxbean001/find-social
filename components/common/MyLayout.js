import Header from '../header/Header'

const Layout = props => (
  <div>
    <link href='/static/styles.css' rel='stylesheet' />
    <Header />
    {props.children}
  </div>
)

export default Layout

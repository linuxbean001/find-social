import Header from '../header/Header'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

// const client = new ApolloClient({
//   uri: 'http://localhost:3300/graphql'
// })
const Layout = props => (
  <div>
    <link href='/static/styles.css' rel='stylesheet' />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
      integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
      crossOrigin='anonymous'
    />
    <link
      rel='stylesheet'
      href='https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
    />
    <link
      href='https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
      rel='stylesheet'
    />

    <Header />
    {props.children}
    {/* <ApolloProvider client={client}>
    <Header />
    {props.children}
    </ApolloProvider> */}
  </div>
)

export default Layout

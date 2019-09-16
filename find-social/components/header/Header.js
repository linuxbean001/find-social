import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => (
  <div>
    <header className='navigation' id='sticky-nav'>
      <div className='container'>
        <div className='top-logo'>
          <a href='index.html'>
            <img src='/static/logos.jpg' />
          </a>
        </div>
        <nav id='cssmenu' className='navigation'>
          <div id='head-mobile' />
          <div className='button' />

          <ul className='nav'>
            <li>
              <a href='#'>Pricing</a>
            </li>
            <li>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Product</a>
            </li>
          </ul>
        </nav>

        {/* <Navbar
          collapseOnSelect
          expand='lg'
          variant='dark'
          className='top-logo'
        >
          <Navbar.Brand href='#home' />
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto nav-link '>
              <a href='#' className='nav-link'>
                Pricing
              </a>
              <a href='#' className='nav-link'>
                Features
              </a>
              <a href='# ' className='nav-link'>
                Product
              </a>
            </Nav>
            <Nav />
          </Navbar.Collapse>
        </Navbar> */}

        <ul className='my-account-link'>
          <li className='list-inline-item'>
            <a href='#'> Sign In</a>
          </li>
          <li className='list-inline-item book_trip'>
            <a href='#'> Get Started</a>
          </li>
        </ul>
      </div>
    </header>
  </div>
)

export default Header

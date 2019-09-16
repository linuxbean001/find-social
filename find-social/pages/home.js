import Link from 'next/link'
import { Navbar, Nav } from 'react-bootstrap'
import Layout from '../components/common/MyLayout'
import SearchData from '../components/service/searchData'

const SearchDataApi = new SearchData();

class Header extends React.Component {



  constructor(props){
    super(props);
    this.categoryEl = React.createRef();
    this.state={
      currency: 'USD'
    }
  }


  getSearchData(){
    event.preventDefault();
    let userInfo={
        'category':this.categoryEl.current.value
    }
    SearchDataApi.getSearchData(userInfo)
    .then(result => {
      console.log('xxxxxxxxxxx reg', result);
    }).catch(err => {
        console.log("xxxxxxxx xxxxxxxxxx xxxx err is ", err);
    });
  }

  render () {
    return (
      <Layout>
        <section id='hero-banner'>
          <div className='container'>
            <div className='row'>
              <div className='hero-banner-content'>
                <h1>
                  The easiest way to find <span>Tik Tok</span> influencers
                </h1>
                <h5>
                  Search a database of over 1.5M tiktok accounts in seconds
                </h5>

                <div className='input-group mb-3'>
                  <input
                    name="category"  
                    id="category" 
                    ref={this.categoryEl}
                    type='text'
                    placeholder='Enter keywords e.g. Canada, Fashion, Football'
                    aria-describedby='button-addon6'
                    className='form-control'
                  />
                  <div className='input-group-append'>
                    <button
                      id='button-addon6'
                      type='submit'
                      className='btn btn-info'
                      onClick={()=>this.getSearchData()}
                    >
                      SEARCH
                    </button>
                  </div>
                </div>

                <p>
                  <small>See stats for your account</small>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id='top-star'>
          <div className='container image-container'>
            <div className='row'>
              <div className='col-md-6 col-lg-4 '>
                <div className='inner'>
                  <div className='image'>
                    <img src='/static/1.jpg' />
                    <div className='crown'>
                      <img src='/static/crown.png' />
                    </div>
                  </div>
                  <h3>Jurriaan van der Broek</h3>
                  <span className='mail'>@rhia.official</span>
                  <p>
                    Hella narwhal Cosby sweater McSweeney's, salvia kitsch
                    before they sold out High Life.{' '}
                  </p>

                  <div className='row'>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>495</span>
                      <span className='follow'>Following</span>
                    </div>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>3.4m</span>
                      <span className='follow'>Fans</span>
                    </div>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>123.9m</span>
                      <span className='follow'>Hearts</span>
                    </div>
                  </div>
                  <a href='#'>SEE REPORT </a>
                </div>
              </div>

              <div className='col-md-6 col-lg-4 '>
                <div className='inner m-t30'>
                  <div className='image'>
                    <img src='https://secure.gravatar.com/avatar/9f7337a4421bb3ac3d9a2890f956ec57?s=400&d=mm&r=g' />
                    <div className='crown'>
                      <img src='/static/crown.png' />
                    </div>
                  </div>
                  <h3>Matthew Lina</h3>
                  <span className='mail'>@rhia.official</span>
                  <p>
                    Hella narwhal Cosby sweater McSweeney's, salvia kitsch
                    before they sold out High Life.{' '}
                  </p>

                  <div className='row'>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>495</span>
                      <span className='follow'>Following</span>
                    </div>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>3.4m</span>
                      <span className='follow'>Fans</span>
                    </div>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>123.9m</span>
                      <span className='follow'>Hearts</span>
                    </div>
                  </div>
                  <a href='#'>SEE REPORT </a>
                </div>
              </div>

              <div className='col-md-6 col-lg-4 '>
                <div className='inner'>
                  <div className='image'>
                    <img src='https://www.lindarichardsphotography.com/wp-content/uploads/2016/04/MG_4617.jpg' />
                    <div className='crown'>
                      <img src='/static/crown.png' />
                    </div>
                  </div>
                  <h3>Langke Zambo</h3>
                  <span className='mail'>@rhia.official</span>
                  <p>
                    Hella narwhal Cosby sweater McSweeney's, salvia kitsch
                    before they sold out High Life.{' '}
                  </p>

                  <div className='row'>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>495</span>
                      <span className='follow'>Following</span>
                    </div>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>3.4m</span>
                      <span className='follow'>Fans</span>
                    </div>
                    <div className='col-md-6 col-lg-4 '>
                      <span className='users'>123.9m</span>
                      <span className='follow'>Hearts</span>
                    </div>
                  </div>
                  <a href='#'>SEE REPORT </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Header

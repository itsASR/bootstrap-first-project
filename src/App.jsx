import './App.css'
import hero from './hero.png'
import logo from './logo.png'

function App() {

  return (
    <>


      <div className="header">
        <div className="container">
          <div className="row">
            <div className="navbar navbar-expand-md">
              <div className="col-md-4">
                <div className="navbar-brand">Bootstrap Practice</div>
              </div>
              <div className="col-md-8">
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navid" >
                  <span className='navbar-toggler-icon'></span>

                </button>

                <div className="collapse navbar-collapse justify-content-end" id="navid" >
                  <div className="navbar-nav">
                    <div className="navbar-item px-3">HOME</div>
                    <div className="navbar-item px-3">HOME</div>
                    <div className="navbar-item px-3">HOME</div>
                    <div className="navbar-item px-3">HOME</div>
                    <div className="navbar-item px-3">HOME</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* <div className="header">
        <div class="container hearto">
          <div class="row">
            <div class="col-md-4 col-12 text-center">
              <h1>COMPANY NAME</h1>
            </div>
            <div class="col-md-8 col-12 d-flex justify-content-center">
              <ul class="nav justify-content-end">
                <li class="nav-item">
                  <a class="nav-link text-dark pt-3" href="">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark pt-3" href="">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark pt-3" href="">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-dark pt-3">Disabled</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </div> */}
      {/* <img src= {hero} class="img-fluid bg-danger" ></img> */}

      <div className="hero">
        <div className="container py-5">
          <div className="row">
            <div className="col-6">
              <h1>hey uper info</h1>
              <p>i am pera you can add anything here</p>
            </div>
          </div>
        </div>
      </div>

      <div className="first-section">
        <div className="container text-center">
          <div className="row">
            <div className="col-12 py-3">
              <h1>DATA HERE</h1>

            </div>
            <div className="row">
              <div className="col-md-4">

                <div class="card" >
                  <img src={hero} class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 py-md-0 py-5">
                <div class="card" >
                  <img src={hero} class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4 md-py-5">
                <div class="card" >
                  <img src={hero} class="card-img-top" />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="testimonal-sec">
        <div className="container pt-4 ">
          <div className="row py-5">
            <div className="col-md-6 ">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0">
                  <img src={logo} style={{ width: "50px", height: "50px" }} />
                </div>
                <div class="flex-grow-1 ms-3">
                  This is some content from a media component. You can replace this with any content and adjust it as needed.
                </div>
              </div>
            </div>

            <div className="col-md-6 pt-md-0 pt-5">
              <div class="d-flex align-items-center">
                <div class="flex-shrink-0 ">
                  <img src={logo} style={{ width: "50px", height: "50px" }} />
                </div>
                <div class="flex-grow-1 ms-3">
                  This is some content from a media component. You can replace this with any content and adjust it as needed.
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>


      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={hero} class="d-block w-100 " style={{ height: "500px" }} />
          </div>
          <div class="carousel-item">
            <img src={hero} class="d-block w-100" style={{ height: "500px" }} />
          </div>
          <div class="carousel-item">
            <img src={hero} class="d-block w-100" style={{ height: "500px" }} />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>



      <div className="footer">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <h3>About Company</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, sint?</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, quos voluptate. Nam aut quaerat consectetur!</p>
            </div>

            <div className="col-md-4">
              <h3>Latest News</h3>
              <a>Lorem ipsum dolor sit amet Lorem ipsum dolor .</a><br />
              <a>Lorem ipsum dolor sit amet Lorem, ipsum dolor..</a><br />
              <a>Lorem ipsum dolor sit amet Lorem, ipsum dolor..</a><br />
              <a>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</a><br />
              <a>Lorem ipsum dolor sit amet. Lorem, ipsum dolor.</a>
            </div>

            <div className="col-md-4">
              <h3>Company Address</h3>
              <address>
                38, Go-Downs, slit war, Jaipur -302001
              </address>
            </div>
          </div>

        </div>

      </div>


    </>
  )
}

export default App

import Carousel from 'react-bootstrap/Carousel';
import "./hero.scss";
// import im from "../../images/off.png"

function Hero() {
  return (
    <div className="hero">
      <Carousel >
        <Carousel.Item className='item'>
          <div className='box'>
            <div className='first'>
              {/* <img src={im}/> */}
              <h6>GET 60% OFF</h6>
              <p>Or menu at start with ₹149</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className='item'>
          <div className='box'>
            <div className='second' >
              <h6>FLAT ₹150 OFF</h6>
              <p>Enjoy your food</p>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item className='item'>
          <div className='box'>
            <div className='third' >
              <h6>BIRYANI START AT ₹129</h6>
              <p>From Dum Safar</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}



export default Hero;
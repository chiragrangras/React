import "./App.css";
import img1 from "./img-1.png";
import img2 from "./img-2.png";
import img3 from "./img-3.png";
import img4 from "./img-4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBars } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div className="App">
      <div className="section-1">
        <h1 className="pg-title-common pg-title-main">Whhat</h1>
        <p className="pg-title-common pg-title-sub">users think.</p>
      </div>
      <div className="section-2">
        <div className="section-2-1">
          <img src={img1} alt="" className="img"></img>
          <h1>Laura smith</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua .
          </p>
        </div>
        <div className="section-2-2">
          <img src={img2} alt="" className="img"></img>
          <h1>Jhon smith</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua .
          </p>
        </div>
        <div className="section-2-3">
          <img src={img3} alt="" className="img"></img>
          <h1>Sara smith</h1>
          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut <br />
            labore et dolore magna aliqua .
          </p>
        </div>
      </div>
      <div className="section-3">
        <img src={img4} alt="" className="sec-img"></img>
        <form>
          <h1>Subscribe</h1>
          <h4>to our newsletter</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            <br />
            sed do eiusmod tempor incididunt .
          </p>
          <input className="name" placeholder="Name"></input>
          <br />
          <br />
          <br />
          <input className="mail" placeholder="Mail"></input>
          <br />
          <br />
          <br />
          <input className="message" placeholder="Message"></input>
          <br />
          <br />
          <br />
          <button className="btn">Send Message</button>
        </form>
      </div>
      <div className="footer">
        <div className="about">
          <h1>
            <u>About</u>
          </h1>
          <p>History</p>
          <p>Our Team</p>
          <p>Mission Statement</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div className="whatwedo">
          <h1>
            <u>What we do</u>
          </h1>
          <p>News and stories</p>
          <p>Publications</p>
          <p>Take action</p>
          <p>Recomendations</p>
          <p>Help</p>
        </div>
        <div className="signup">
          <h1>
            Sign Up To Receive
            <br />
            ___Our Newsletter
          </h1>
          <input></input>
          <div className="footer-icon">
            <p>Follow us!</p>
            <FontAwesomeIcon icon={faFacebook} size="2x" color="#e6e6e6"/>
            <FontAwesomeIcon icon={faSquareInstagram}  size="2x" color="#e6e6e6" />
            <FontAwesomeIcon icon={faYoutube} size="2x" color="#e6e6e6" />
            {/* <FontAwesomeIcon icon={faBars} size="2x" color="#e6e6e6" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

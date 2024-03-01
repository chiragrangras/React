import "./App.css";
import img1 from './img-1.png';
import img2 from './img-2.png'

function App() {
  return (
    <div className="App">
      <div className="section-1">
        <h1 className="pg-title-common pg-title-main">Whhat</h1>
        <p className="pg-title-common pg-title-sub">users think.</p>
      </div>
      <div className="section-2">
        <div className="section-2-1">
        <img
          src={img1}
          alt=""
          className="img"
        ></img>
        <h1>Laura smith</h1>
        <p>Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit, sed do<br /> 
          eiusmod tempor incididunt ut <br />
          labore et dolore magna aliqua .</p>
        </div>
        <div className="section-2-2">
        <img
          src={img2}
          alt=""
          className="img"
        ></img>
        <h1>Jhon  smith</h1>
        <p>Lorem ipsum dolor sit amet,<br />
          consectetur adipiscing elit, sed do<br /> 
          eiusmod tempor incididunt ut <br />
          labore et dolore magna aliqua .</p>
        </div>
      </div>
    </div>
  );
}

export default App;
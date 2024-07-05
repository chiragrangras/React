import "./App.css";
import "./nav.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="nav">
          <a href="#">Logo</a>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Courses</a>
          <a href="#">Blog</a>
          <button className="btn">Sign In</button>
        </div>
        <div className="section-1">
          <span>
            <big>Ui</big>
          </span>
          <h6 className="text">BEGINNER′s</h6>
        </div>
      </div>
    </div>
  );
}

export default App;

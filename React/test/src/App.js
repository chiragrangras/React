import i1 from "./i1.jpg";
import "./App.css";

function Test1() {
  const x = 12;

  const obj = {
    color: "red",
    height: "100px",
    with: 200,
    background: "blue",
  };
  return (
    <>
      <div>
        {1 != 1 ? "t" : "f"}

        <img src="images/i1.jpg" height={100}></img>

        <img src={i1} height={100}></img>

        <img
          height={"100px"}
          src="https://www.carandbike.com/_next/image?url=https%3A%2F%2Fimages.carandbike.com%2Fcar-images%2Fbig%2Fnissan%2Fgt-r%2Fnissan-gt-r.jpg%3Fv%3D25&w=3840&q=75"
        ></img>

        <input value={x}></input>
        <br/>WELCOME TO REACT {x}
      </div>
      {/* h1 style="color:red" */}
      <h1 style={
        {
          "color": "red",
          height:"100px",
          width:100,
          background: "blue"
        
        }
      }>Hello</h1>

      <p style={obj}>Para</p>
      <Chirag></Chirag>
      {/* <Chirag/> */}
    </>
  );
}

function Chirag()
{
  return (
    <>
      HELLO ANOTHER FUN

    </>
  )
}

export default Test1;

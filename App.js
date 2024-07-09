import React from "react";
import ReactDOM from "react-dom/client";

//what is react element => object => HTML element(when we render)

//jsx => jsx is similar to html element but its not exactly html element. It is a react element.
// jsx is trasnpiled(converted to readable to js engine) before it reaches to js engine- the transpilation is done by parcel's package babel(a js compiler)
// the attribute of jsx elements always written in camlecase

//react component
// there are two types of component
// 1.class component
// 2.functional component => a function which returns block of jsx code is known as functional component or a function which return react element

// component composition => if there is another multiple components inside or return by a component is  called component composition

const elem=<span>react elemen</span>


const HeadingComponent1 = () => {
  return (<h1>react component    {elem}
</h1>);
};

const number = 1000;
const JsxHeading = () => (
  <div>
    <h1 className="head">Hello world {number}</h1>
    {HeadingComponent1()}
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(jsxHeading)
root.render(<JsxHeading />);

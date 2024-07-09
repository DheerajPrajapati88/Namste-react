
import React from "react";
import ReactDOM from "react-dom";


//what is react element => object => HTML element(when we render)


//jsx => jsx is similar to html element but its not exactly html element. It is a react element.
// jsx is trasnpiled(converted to readable to js engine) before it reaches to js engine- the transpilation is done by parcel's package babel(a js compiler)
// the attribute of jsx elements always written in camlecase

const jsxHeading= (<h1 className="head">Hello world</h1>)
const root=ReactDOM.createRoot(document.getElementById("root"));
console.log(jsxHeading)
root.render(jsxHeading)


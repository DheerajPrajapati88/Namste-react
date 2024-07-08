
const parent=React.createElement("div",{id:"parent"},React.createElement("div",{id:"child"},[React.createElement("h1",{id:"text-h1"},"This is the h1 tag"),React.createElement("h2",{id:"text-h2"},"This is the h2 tag")]))

// const heading=React.createElement("h1",{id:"h1"},"Hello World  by Namste Dev");
// console.log(heading)
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent)

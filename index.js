const heading = React.createElement("h1", 
{ id: "header" },
"hello world From React")

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(heading)

//nested

const nest = React.createElement("h1",{id : "parent"},
    React.createElement("h1",{id:"children"},
    React.createElement("h6",{id:"sibling"},
        "Hello World From nested React"
    
    ))                 )
    const nested = ReactDOM.createRoot(document.getElementById("nested"))

nested.render(nest)
  //or  
  const siblingnest = React.createElement("h1",{id : "parent"},
  React.createElement("h1",{id:"children"},
 [ React.createElement("h5",{id:"sibling1"},
      "Hello World From nested React sibling1"),
      React.createElement("h5",{id:"sibling2"},
      "Hello World From nested React sibling 2")]
  
  )                 )
  const siblingnes = ReactDOM.createRoot(document.getElementById("siblingnest"))
  siblingnes.render(siblingnest)

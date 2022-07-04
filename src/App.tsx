import React from "react";
import Header from "./components/Header/Header";
import "semantic-ui-css/semantic.min.css";
import Notes from "./pages/Notes/Notes";

function App() {
  return (
    <div className="App">
      <Header />
      <Notes />
    </div>
  );
}

export default App;

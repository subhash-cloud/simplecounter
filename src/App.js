import React from "react";
import "./styles.css";
import Counter from "./Counter.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        <Counter diff={1} />
      
      </div>
    );
  }
}
export default App;
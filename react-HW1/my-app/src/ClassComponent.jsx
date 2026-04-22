import { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Cristiano Ronaldo" };
  }
  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
      </>
    );
  }
}
 export default ClassComponent;
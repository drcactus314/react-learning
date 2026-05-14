import { Component } from "react";
export class MyClassComponent extends Component {
  state = {
    toDo: [],
    input: "",
  };

  componentDidMount() {
    const lsToDo = localStorage.getItem("toDo");
    if (lsToDo) {
      this.setState({ toDo: JSON.parse(lsToDo) });
    }
    console.log("ComponentDidMount");
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.toDo !== this.state.toDo) {
      console.log("ComponentDidUpdate");
      localStorage.setItem("toDo", JSON.stringify(this.state.toDo));
    }
  }

  addToDo = () => {
    this.setState({ toDo: [...this.state.toDo, this.state.input], input: "" });
  };

  OnChangeHandleInput = (e) => {
    const value = e.target.value;
    this.setState({ input: value });
  };
  clearToDo = () => {
    localStorage.removeItem('toDo');
  };

  render() {
    return (
      <>
        <input value={this.state.input} onChange={this.OnChangeHandleInput} />
        <button onClick={this.addToDo}>Add TODO</button>
        <button onClick={this.clearToDo}>Очистити</button>
        <div>Hello I'm Class component</div>

        {this.state.toDo.map((task, index) => {
          return <p key={index}>{task}</p>;
        })}
      </>
    );
  }
}

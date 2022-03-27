import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    // console.log("Counters - Rendered");

    const { counters, onDelete, onIncrement, onDecrement, onSubmit } =
      this.props;
    return (
      <div>
        {/* <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button> */}
        {counters.map((counter) => (
          <Counter
            key={counter.name}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // onChange={onChange}
            onSubmit={onSubmit}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;

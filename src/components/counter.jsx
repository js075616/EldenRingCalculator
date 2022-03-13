import React, { Component } from "react";

class Counter extends Component {
  render() {
    // console.log("Counter - Rendered");

    return (
      <div>
        <h5 className="span ml-2">{this.props.counter.name}</h5>
        <h5 className="h5 ml-2=1">
          <span className={this.getBadgeClasses()}>
            {this.props.counter.value}
          </span>
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary btn-sm m-1 px-2"
          >
            -
          </button>
        </h5>

        {/* <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button> */}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-pill m-2 badge-primary";
    return classes;
  }
}

export default Counter;

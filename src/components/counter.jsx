import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.counter.value };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    // alert("A name was submitted: " + this.state.value);
    event.preventDefault();
    this.props.onSubmit(this.props.counter, this.state.value);
  }

  render() {
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
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              // placeholder="Enter stat"
              value={this.state.value}
              onChange={this.handleChange}
            />
          </form>
        </h5>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge badge-pill m-2 badge-primary";
    return classes;
  }
}

export default Counter;

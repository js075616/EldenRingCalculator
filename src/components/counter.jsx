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
      <div className="row ml-1">
        <h5 className="col-md-1 padding-0 span mt-2 auto">
          {this.props.counter.name}
        </h5>
        <h5 className="col-md-0 padding-0 mb-2">
          <span className="badge badge-pill m-2 badge-primary">
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
        <form
          onSubmit={this.handleSubmit}
          className="col-md-0 padding-0 mt-1 ml-1"
        >
          <input
            type="text"
            placeholder="Enter stat"
            // value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default Counter;

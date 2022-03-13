import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import React, { Component } from "react";

class DropDown extends Component {
  //   handleChange = (e) => {
  //     // const value = e;
  //     // this.setState({ value });
  //     // console.log("State:", this.state.value);
  //     console.log("Clicked:", e);
  //     return e;
  //   };
  render() {
    return (
      <div style={{ display: "block", width: 700, padding: 10 }}>
        <Dropdown>
          <Dropdown.Toggle variant="primary">
            {this.props.dropName}
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {/* <Dropdown.Item onClick={() => this.props.onSelect("start")}>
              Choose Your Starting Class
            </Dropdown.Item> */}
            <Dropdown.Item onClick={() => this.props.onSelect("hero")}>
              Hero
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("bandit")}>
              Bandit
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("astro")}>
              Astrologer
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("war")}>
              Warrior
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("prisoner")}>
              Prisoner
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("conf")}>
              Confessor
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("wretch")}>
              Wretch
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("vagabond")}>
              Vagabond
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("proph")}>
              Prophet
            </Dropdown.Item>
            <Dropdown.Item onClick={() => this.props.onSelect("sam")}>
              Samurai
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    );
  }
}

export default DropDown;

import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/Dropdown";
import React, { Component } from "react";

class DropDown extends Component {
  render() {
    return (
      <div style={{ display: "block", width: 283, padding: 10 }}>
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

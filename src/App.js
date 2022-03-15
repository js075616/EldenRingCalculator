import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";
import DropDown from "./components/dropdown";
// import "./App.css";

class App extends Component {
  state = {
    counters: [
      { name: "Vigor", value: 10, minValue: 10, input: "" },
      { name: "Mind", value: 10, minValue: 10, input: "" },
      { name: "Endurance", value: 10, minValue: 10, input: "" },
      { name: "Strength", value: 10, minValue: 10, input: "" },
      { name: "Dexterity", value: 10, minValue: 10, input: "" },
      { name: "Intelligence", value: 10, minValue: 10, input: "" },
      { name: "Faith", value: 10, minValue: 10, input: "" },
      { name: "Arcane", value: 10, minValue: 10, input: "" },
    ],
    earlyRunes: [673, 689, 706, 723, 740, 757, 775, 793, 811, 829, 847],
    startingLevel: 1,
    nextRunes: 0,
    dropName: "Select your Starting Class (Wretch)",
    actualLevel: 0,
    actualLevelInput: 0,
  };

  constructor() {
    super();
    this.handleCurrentChange = this.handleCurrentChange.bind(this);
    this.handleCurrentSubmit = this.handleCurrentSubmit.bind(this);
    // console.log("App - Constructor");
  }

  // componentDidMount() {
  //   // Ajax Call
  //   // console.log("App - Mounted");
  // }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    if (counters[index].value > 99) {
      counters[index].value = 99;
    }
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    if (counters[index].value < counters[index].minValue) {
      counters[index].value = counters[index].minValue;
    }
    this.setState({ counters });
  };

  handleCounterUpdate = (valueArray) => {
    const counters = [
      { name: "Vigor", value: valueArray[0], minValue: valueArray[0] },
      { name: "Mind", value: valueArray[1], minValue: valueArray[1] },
      { name: "Endurance", value: valueArray[2], minValue: valueArray[2] },
      { name: "Strength", value: valueArray[3], minValue: valueArray[3] },
      { name: "Dexterity", value: valueArray[4], minValue: valueArray[4] },
      { name: "Intelligence", value: valueArray[5], minValue: valueArray[5] },
      { name: "Faith", value: valueArray[6], minValue: valueArray[6] },
      { name: "Arcane", value: valueArray[7], minValue: valueArray[7] },
    ];
    return counters;
  };

  handleSelect = (selection) => {
    // console.log("Selected", selection);
    let counters;
    let startingLevel;
    let dropName;
    switch (selection) {
      case "hero":
        counters = this.handleCounterUpdate([14, 9, 12, 16, 9, 7, 8, 11]);
        startingLevel = 7;
        dropName = "Hero";
        break;
      case "bandit":
        counters = this.handleCounterUpdate([10, 11, 10, 9, 13, 9, 8, 14]);
        startingLevel = 5;
        dropName = "Bandit";
        break;
      case "astro":
        counters = this.handleCounterUpdate([9, 15, 9, 8, 12, 16, 7, 9]);
        startingLevel = 6;
        dropName = "Astrologer";
        break;
      case "war":
        counters = this.handleCounterUpdate([11, 12, 11, 10, 16, 10, 8, 9]);
        startingLevel = 8;
        dropName = "Warrior";
        break;
      case "prisoner":
        counters = this.handleCounterUpdate([11, 12, 11, 11, 14, 14, 6, 9]);
        startingLevel = 9;
        dropName = "Prisoner";
        break;
      case "conf":
        counters = this.handleCounterUpdate([10, 13, 10, 12, 12, 9, 14, 9]);
        startingLevel = 10;
        dropName = "Confessor";
        break;
      case "wretch":
        counters = this.handleCounterUpdate([10, 10, 10, 10, 10, 10, 10, 10]);
        startingLevel = 1;
        dropName = "Wretch";
        break;
      case "vagabond":
        counters = this.handleCounterUpdate([15, 10, 11, 14, 13, 9, 9, 7]);
        startingLevel = 9;
        dropName = "Vagabond";
        break;
      case "proph":
        counters = this.handleCounterUpdate([10, 14, 8, 11, 10, 7, 16, 10]);
        startingLevel = 7;
        dropName = "Prophet";
        break;
      case "sam":
        counters = this.handleCounterUpdate([12, 11, 13, 12, 15, 9, 8, 8]);
        startingLevel = 7;
        dropName = "Samurai";
        break;
      default:
        counters = this.handleCounterUpdate([0, 0, 0, 0, 0, 0, 0, 0]);
        startingLevel = 0;
        dropName = "Select your Starting Class";
    }
    this.setState({ counters, startingLevel, dropName });
  };

  handleSubmit = (counter, value) => {
    if (value < 100 && value >= counter.minValue) {
      const counters = [...this.state.counters];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value = value;
      this.setState({ counters });
    } else {
      alert(`The stat be between ${counter.minValue} and 99`);
    }
    // console.log("Value: ", value);
  };

  handleCurrentChange(event) {
    this.setState({ actualLevelInput: event.target.value });
    // console.log(this.state.actualLevelInput);
  }

  handleCurrentSubmit(event) {
    console.log("Actual level input: ", this.state.actualLevelInput);
    event.preventDefault();
    const actualLevel = this.state.actualLevelInput;
    this.setState({ actualLevel });
    console.log(this.state.actualLevel);
  }

  calculateLevel = () => {
    let count = this.state.startingLevel;
    const counters = [...this.state.counters];
    counters.forEach((counter) => {
      count += counter.value - counter.minValue;
    });
    return count;
  };

  calculateRunes = (currentLevel) => {
    let nextRunes;
    if (currentLevel > 11) {
      currentLevel++;
      nextRunes =
        0.02 * currentLevel ** 3 +
        3.06 * currentLevel ** 2 +
        105.6 * currentLevel -
        895;
    } else {
      currentLevel--;
      nextRunes = this.state.earlyRunes[currentLevel];
    }
    // nextRunes = Math.round(nextRunes);
    return Math.round(nextRunes);
  };

  calculateTotalRunes = (currentLevel, startingLevel) => {
    let totalRunes = 0;
    let subtractRunes = 0;
    for (let i = startingLevel + 1; i <= currentLevel; i++) {
      totalRunes = totalRunes + this.calculateRunes(i - 1);
      // console.log("Total runes: ", totalRunes);
    }
    if (this.state.actualLevel !== 0) {
      for (let i = startingLevel + 1; i <= this.state.actualLevel; i++) {
        subtractRunes = subtractRunes + this.calculateRunes(i - 1);
      }
    }
    totalRunes = totalRunes - subtractRunes;
    if (totalRunes < 0) {
      return 0;
    } else {
      return totalRunes;
    }
  };

  render() {
    // console.log("App - Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.calculateLevel()}
          nextRunes={this.calculateRunes(this.calculateLevel())}
          totalRunes={this.calculateTotalRunes(
            this.calculateLevel(),
            this.state.startingLevel
          )}
        />
        <div>
          <DropDown
            dropName={this.state.dropName}
            onSelect={this.handleSelect}
            className="col-md-0 padding-0"
          />{" "}
          <form
            onSubmit={this.handleCurrentSubmit}
            className="col-md-0 padding-0 mt-1 ml-5 mb-1"
          >
            <input
              type="number"
              placeholder="Enter current level"
              // value={this.state.value}
              onChange={this.handleCurrentChange}
            />
          </form>
        </div>
        <main className="container"></main>
        <Counters
          counters={this.state.counters}
          // onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          // onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          // onDelete={this.handleDelete}
        />
        <h6 className="text-muted m-2">
          Note: The rune values are approximate due to the nature of JavaScript
          rounding. Report any issues{" "}
          <a href={"https://github.com/js075616/EldenRingCalculator/issues"}>
            here.
          </a>
        </h6>
        <h6 className="text-muted m-2">
          Created by Jake Schwarz, with information from the{" "}
          <a href={"https://eldenring.wiki.fextralife.com/Elden+Ring+Wiki/"}>
            Elden Ring Wiki
          </a>
        </h6>
      </React.Fragment>
    );
  }
}

export default App;

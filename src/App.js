import React, { Component } from "react";
import Multiline from "./components/Multiline";
import Select from "./components/Select";
import Greetings from "./components/Greetings";

class App extends Component {
  languages = ["english", "french", "spanish"];
  names = "";
  constructor(props) {
    super(props);
    this.state = {
      namesList: [],
      language: "english"
    };
  }

  handleChange = event => {
    console.log(event.target.value);
    this.names = event.target.value;
  };

  handleLanguageChange = event => {
    this.setState({
      language: event.target.value
    });
  };

  handleGo = () => {
    if (this.names !== "") {
      let data = this.names.split("\n");
      console.log("data...", data, this.state.language);
      this.setState({
        namesList: data
      });
    } else {
      window.alert("Please enter names to wish");
    }
  };

  render() {
    return (
      <div>
        <header style={styles.header}>
          <h1 style={styles.noMargin}>React Project</h1>
        </header>
        <div style={styles.mainEntry}>
          <div>
            <Multiline
              placeholder="Enter names to wish"
              name="names"
              onChange={this.handleChange}
            />
            <Select
              name="language"
              onChange={this.handleLanguageChange}
              options={this.languages}
            />
            <button style={styles.button} onClick={this.handleGo}>
              Go
            </button>
          </div>
          <div>
            <Greetings
              language={this.state.language}
              names={this.state.namesList}
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  header: {
    background: "#1976D2",
    padding: 16,
    textAlign: "center",
    color: "#fff",
    fontSize: 12
  },
  noMargin: {
    margin: 0
  },
  mainEntry: {
    padding: 16,
    width: 325,
    margin: "20px auto"
  },
  button: {
    padding: "6px 12px",
    border: "none",
    background: "#2196F3",
    color: "#fff",
    borderRadius: 4
  }
};

export default App;

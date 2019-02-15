import React, { Component } from "react";

class Select extends Component {
  render() {
    return (
      <select
        style={styles.select}
        name={this.props.name}
        onChange={this.props.onChange}
      >
        {this.props.options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    );
  }
}

const styles = {
  select: {
    padding: "6px 12px",
    margin: "16px 0",
    width: "325px",
    display: "block",
    borderRadius: 4
  }
};

export default Select;

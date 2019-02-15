import React, { Component } from "react";

class Multiline extends Component {
  render() {
    return (
      <textarea
        placeholder={this.props.placeholder}
        style={styles.textArea}
        rows="4"
        name={this.props.name}
        onChange={this.props.onChange}
      />
    );
  }
}

const styles = {
  textArea: {
    display: "block",
    resize: "none",
    margin: "16px 0",
    padding: "6px 12px",
    width: "300px",
    borderRadius: 4
  }
};

export default Multiline;

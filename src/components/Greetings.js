import React, { Component } from "react";

class Greetings extends Component {
  greetings = {
    english: "greetings",
    spanish: "saludos",
    french: "salut"
  };

  salutations = {
    english: "Hello",
    spanish: "Hola",
    french: "Bonjour"
  };

  render() {
    const language = this.props.language;
    return (
      <div>
        {this.props.names.map((name, index) => (
          <p key={index}>
            {this.salutations[language]} {name}, {this.greetings[language]}!
          </p>
        ))}
      </div>
    );
  }
}

export default Greetings;

import React from "react";
import axios from "axios";
import "./App.css";

class RQG extends React.Component {
  state = { advice: " " };

  componentDidMount() {
    this.fetchAdvice();
  }

  //'fetchAdvice' is a Method not a function as it is made inside a class, so we don't need to define it using const.
  fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const { advice } = response.data.slip;
        this.setState({ advice: advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { advice } = this.state; // (good coding practice) but (instead of console.log(advice) we could do console.log(this.state.advice) and remove const{advice}).
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>INSPIRE ME!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default RQG;

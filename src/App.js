import React, { Component } from "react";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  resetHandler = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    return this.setState({ counters });
  };
  incrementHnadler = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  decrementHandler = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  }

  deleteHandler = (id) => {
    const counters = this.state.counters.filter((c) => c.id !== id);
    return this.setState({
      counters,
    });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters
          counters={this.state.counters}
            onReset={this.resetHandler}
            onIncrement={this.incrementHnadler}
            onDecrement={this.decrementHandler}
            onDelete={this.deleteHandler}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;

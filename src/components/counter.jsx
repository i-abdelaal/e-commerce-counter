import React, { Component } from "react";

class Counter extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.props.counter;

    return value === 0 ? "ZERO" : value;
  }

  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => onIncrement(counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <button
           onClick={() => {this.props.counter.value >= 1 && onDecrement(counter)}}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
        <buttom
          onClick={() => onDelete(counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Dlelte
        </buttom>
      </div>
    );
  }
}

export default Counter;

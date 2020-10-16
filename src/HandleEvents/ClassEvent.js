import React, { Component } from "react";

export default class ClassEvent extends Component {
  //phương thức cuả class
  handleFocus = () => {
    console.log("focus thành công");
  };
  handleFocusParams = (message) => {
    console.log(message);
  };
  render() {
    return (
      <div>
        <h2>ClassEvent</h2>
        <input type="text" placeholder="focus" onFocus={this.handleFocus} />
        <input
          type="text"
          placeholder="focus params"
          onFocus={() => this.handleFocusParams("focus thanh cong")}
        />
      </div>
    );
  }
}

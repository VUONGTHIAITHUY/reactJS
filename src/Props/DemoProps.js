import React, { Component } from "react";
import FunctionProps from "./FunctionProps";
import ClassProps from "./ClassProps";

export default class DemoProps extends Component {
  type = "Husky";
  image ="https://sieupet.com/sites/default/files/husky_0.jpg";
  render() {
    return (
      <div>
        <h2>Props</h2>
        {/* cách truyền dữ liệu  */}
        <FunctionProps loaiCho={this.type} hinhAnh={this.image}/>
        {/* props dùng để truyền dữ liệu giữ các component */}
        <ClassProps typeDog={this.type} imgHusky={this.image} />
      </div>
    );
  }
}

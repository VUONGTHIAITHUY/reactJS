import React, { Component } from "react";

export default class DemoCourse extends Component {
  DanhSachKhoaHọc = ["ReactJS", "Node JS", "VueJS"];
  renderDanhSachKhoaHoc = () => {
    return this.DanhSachKhoaHọc.map((khoaHoc, index) => {
      return <li key={index}>{khoaHoc}</li>;
    });
  };
  render() {
    return (
      <div>
        <h2>List And key</h2>
        <h3>Danh sach khóa học</h3>
        <ul>{this.renderDanhSachKhoaHoc()}</ul>
      </div>
    );
  }
}

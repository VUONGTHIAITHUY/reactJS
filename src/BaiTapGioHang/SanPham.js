import React, { Component } from "react";

export default class SanPham extends Component {
  
  render() {
    return (
      <div>
        <div className="card">
          <img className="card-img-top" src={this.props.sanPham.hinhAnh} alt="hinhanh" />
          <div className="card-body">
            <h4 className="card-title">{this.props.sanPham.tenSanPham}</h4>
            <button onClick={()=>{this.props.HandleDetail(this.props.sanPham);}} className="btn btn-success">Chi tiết</button>
            <button onClick={()=>{this.props.handleAddSP(this.props.sanPham);}} className="btn btn-danger">Thêm giỏ hàng</button>
          </div>
        </div>
      </div>
    );
  }
}

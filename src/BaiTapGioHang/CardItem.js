import React, { Component } from "react";

export default class CardItem extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.card.maSanPham}</td>
        <td>{this.props.card.tenSanPham}</td>
        <td>
          <img src={this.props.card.hinhAnh} width={50} alt="..." />
        </td>
        <td>
          <button onClick={()=>{this.props.handleTangGiam(this.props.card,false);
          }}>-</button>
          {this.props.card.soLuong}
          <button onClick={()=>{this.props.handleTangGiam(this.props.card,true)}}>+</button>
        </td>
        <td>{this.props.card.giaBan}</td>
        <td>{this.props.card.soLuong*this.props.card.giaBan}</td>
        <td>
          <button
            onClick={() => {
              this.props.handleDelete(this.props.card);
            }}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

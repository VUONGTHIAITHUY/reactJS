import React, { Component } from "react";
import { connect } from "react-redux";
import CardItem from "./CardItem";

const renderCardLish = (gioHang) => {
  console.log({ aaa: gioHang.length });
  return (
    gioHang.length > 0 &&
    gioHang.map((card, index) => {
      console.log({ card });
      return (
        <CardItem
          // handleTangGiam={this.props.handleTangGiam}
          // handleDelete={this.props.handleDelete}
          card={card}
          key={index}
        />
      );
    })
  );
};

class Modal extends Component {
  // renderCardLish = () => {
  //   console.log(this.props.danhSachGioHang)
  //   return (
  //     this.props.danhSachGioHang &&
  //     this.props.danhSachGioHang.map((card, index) => {
  //       return (
  //         <CardItem
  //           handleTangGiam={this.props.handleTangGiam}
  //           handleDelete={this.props.handleDelete}
  //           card={card}
  //           key={index}
  //         />
  //       );
  //     })
  //   );
  // };

  render() {
    const danhSachGioHang = this.props.danhSachGioHang;
    console.log("==========", this.props, danhSachGioHang);

    return (
      <div
        className="modal fade"
        id="modelId"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="modelTitleId"
        // aria-hidden="true"
        // style={{ display: "none" }}
      >
        <div
          className="modal-dialog"
          style={{ maxWidth: 1000 }}
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <table className="table">
                <thead>
                  <tr>
                    <th>Mã sản phẩm</th>
                    <th>tên sản phẩm</th>
                    <th>hình ảnh</th>
                    <th>số lượng</th>
                    <th>đơn giá</th>
                    <th>thành tiền</th>
                  </tr>
                </thead>
                <tbody>{renderCardLish(danhSachGioHang)}</tbody>
              </table>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // key:value
    //key là props của component , value là state lưu trữ trên store
    danhSachGioHang: state.gioHangreducer.danhSachGioHang,
    sanPhamChiTiet: state.gioHangreducer.sanPhamChiTiet,
  };
};
export default connect(mapStateToProps)(Modal);

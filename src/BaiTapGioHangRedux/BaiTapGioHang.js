/**
 * Các bước thực hiện
 * 2. Xác định các data thay đổi lưu vào state
 * 3. Lấy data trong state binding ra jsx
 * 4.render mảng dữ liệu
 * 5.xây dựng chức năng xem chi tiết
 * 6.thêm giỏ hàng
 * 7. xây dựng chức năng delete sản phẩm
 * 8. xây dựng chức năng tăng giảm số lượng
 * 9.xây dựng cức năng hiển thị tổng số sản phẩm
 *
 */

import React, { Component } from "react";
import SanPham from "./SanPham";
import Modal from "./Modal";
import { connect } from "react-redux";

class BaiTapGioHang extends Component {
  state = {
    openGioHang: false,
  };
  handleDelete = (card) => {
    let danhSachGioHang = this.state.danhSachGioHang;
    danhSachGioHang = danhSachGioHang.filter((item) => {
      return card.maSanPham !== item.maSanPham;
    });

    this.setState({ danhSachGioHang });
  };

  handleTangGiam = (card, status) => {
    //1.lấy mảng thực hiện
    //2.tìm vị trí của phần tử được nhấn
    //3.check là tăng hay giảm(status)
    //4.cập nhật lại state
    // let danhSachGioHang = this.state.danhSachGioHang;===
    let { danhSachGioHang, sanPhamChiTiet } = this.state; //destructering
    const index = danhSachGioHang.findIndex((item) => {
      return item.maSanPham === card.maSanPham;
    });
    if (index !== -1) {
      if (status) {
        danhSachGioHang[index].soLuong += 1;
      } else {
        if (danhSachGioHang[index].soLuong > 1) {
          danhSachGioHang[index].soLuong -= 1;
        } else {
          danhSachGioHang = danhSachGioHang.filter((item) => {
            return card.maSanPham !== item.maSanPham;
          });
        }
      }
    }
    this.setState({
      danhSachGioHang,
    });
  };
  HandleDetail = (sanPham) => {
    console.log("run handle detai");
    this.setState({
      sanPhamChiTiet: sanPham,
    });
  };
  handleAddSP = (sanPham) => {
    let danhSachGioHang = this.props.danhSachGioHang;
    //tim xe có tồn tại hay chưa
    const index = danhSachGioHang.findIndex((card) => {
      return card.maSanPham === sanPham.maSanPham;
    });
    if (index !== -1) {
      //tìm thấy cập nhật số lượng
      danhSachGioHang[index].soLuong += 1;
    } else {
      sanPham.soLuong = 1;
      //không tìm thấy set số lượng bằng 1 push vào mảng
      danhSachGioHang.push(sanPham);
    }
    //= danhSachSanPham=[...danhSachGioHang,sanPham];
    this.setState({
      danhSachGioHang: danhSachGioHang,
    });
    console.log(this.danhSachGioHang);
  };

  renderDanhSachSanPham = () => {
    return this.props.danhSachSanPham.map((sanPham, index) => {
      return (
        <div className="col-sm-4">
          <SanPham
            handleAddSP={this.handleAddSP}
            // HandleDetail={this.HandleDetail}
            sanPham={sanPham}
          />
        </div>
      );
    });
  };
  // renderTotal = () => {
  //   let { danhSachGioHang } = this.props;
  //   let total = danhSachGioHang
  //     ? danhSachGioHang.reduce((tong, cardHienTai) => {
  //         return (tong += cardHienTai.soLuong);
  //       }, 0)
  //     : 0;
  //   return total;
  // };

  render() {
    const openGioHang = this.state.openGioHang;
    return (
      <div>
        <div>
          <section className="container">
            <h3 className="title text-center">Bài tập giỏ hàng</h3>
            <div className="container text-center my-2">
              <button
                className="btn btn-danger "
                onClick={() => this.setState({ openGioHang: true })}
              >
                Giỏ hàng: {this.props.totalItems}
              </button>
            </div>
            <div className="container">
              <div className="row">{this.renderDanhSachSanPham()}</div>
            </div>
            {this.state.openGioHang && (
              <Modal
                handleTangGiam={this.handleTangGiam}
                // danhSachGioHang={this.props.danhSachGioHang}
                handleDelete={this.handleDelete}
              />
            )}
            <div className="row">
              <div className="col-sm-5">
                <img
                  className="img-fluid"
                  src={this.props.sanPhamChiTiet.hinhAnh}
                  alt=".."
                />
              </div>
              <div className="col-sm-7">
                <h3>Thông số kỹ thuật</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>Màn hình</td>
                      <td>{this.props.sanPhamChiTiet.manHinh}</td>
                    </tr>
                    <tr>
                      <td>Hệ điều hành</td>
                      <td>{this.props.sanPhamChiTiet.heDieuHanh}</td>
                    </tr>
                    <tr>
                      <td>Camera trước</td>
                      <td>{this.props.sanPhamChiTiet.cameraTruoc}</td>
                    </tr>
                    <tr>
                      <td>Camera sau</td>
                      <td>{this.props.sanPhamChiTiet.cameraSau}</td>
                    </tr>
                    <tr>
                      <td>RAM</td>
                      <td>{this.props.sanPhamChiTiet.ram}</td>
                    </tr>
                    <tr>
                      <td>ROM</td>
                      <td>{this.props.sanPhamChiTiet.rom}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // key:value
    //key là props của component , value là state lưu trữ trên store
    danhSachSanPham: state.gioHangreducer.danhSachSanPham,
    sanPhamChiTiet: state.gioHangreducer.sanPhamChiTiet,
    totalItems: state.gioHangreducer.totalItems,
  };
};
export default connect(mapStateToProps)(BaiTapGioHang);

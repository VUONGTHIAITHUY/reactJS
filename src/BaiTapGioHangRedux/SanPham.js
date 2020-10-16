import React, { Component } from "react";
import {connect} from 'react-redux';
class SanPham extends Component {
  
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
const mapDispatchToProps=(dispatch)=>{
  return{
    //key:value
    // key là props của component value là phương thức gửi lên action
    HandleDetail:(sp)=>{
      const action ={
        type:"DETAIL_PRODUCT",
        payload:sp
      };
      dispatch(action);
    },
    handleAddSP:(sp)=>{
      const action={
        type: "ADD_PRODUCT",
        payload:sp,
      };
      dispatch(action);
    }
  };
};
export default connect (null,mapDispatchToProps)(SanPham)

import React, { Component } from "react";

export default class DemoConditionalAndState extends Component {
  /**
   * isLogin là thuộc tính của class
   * true: đã đăng nhập=> hiện tên người dùng
   * false: chưa đăng nhập=> log in
   */

  state = {
    isLogin: false,
  };
  isLogin = false;
  LogIn = () => {
    // this.state.isLogin = true;
    this.setState({
      isLogin: true,
    });
  };
  renderLogin = () => {
    // cách 1 dùng if else
    if (this.state.isLogin) {
      return <p>Ái Thùy</p>;
    } else {
      return <button onClick={this.LogIn}>Login</button>;
    }
    //toán tuer 3 ngôi điệu kiên?xử lý đúng:xử lý sai
    // return this.isLogin?<p>Ái Thùy</p>:<button>Login</button>;
  };
  render() {
    return (
      <div>
        <h2>Conditional and State</h2>
        <div>{this.renderLogin()}</div>
      </div>
    );
  }
}

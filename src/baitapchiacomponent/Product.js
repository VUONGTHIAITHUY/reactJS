import React from 'react'

export default function Product(props) {
    return (
        <div className="container">
            <div className="card bg-light" style={{ width: 300 }}>
              <img
                className="card-img-top"
                src={props.sanPham.hinhAnh}
                alt="Card image"
                style={{ maxWidth: "100%", height: 250 }}
              />
              <div className="card-body text-center">
                <h4 className="card-title text-center">{props.sanPham.tenSP}</h4>
                <p className="card-text">
                {props.sanPham.moTa}
                </p>
                <a href="#" className="btn btn-primary">
                  Detail
                </a>
                <a href="#" className="btn btn-danger">
                  Cart
                </a>
              </div>
            </div>
          </div>
    )
}

import React, { Component } from 'react'
import Header from './Header'
import Slideder from './Slideder'
import ProductList from './ProductList'
import Product from './Product'

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Slideder/>
                <ProductList/>
            </div>
        )
    }
}

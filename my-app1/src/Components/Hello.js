import React from "react";
import Foot from "./Foot"
// import Head from "./Head"
import Product from "./Product"
import ShowMessage from "./ShowMessage";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ProductDetail from './ProductDetail';

const Hello = () => {
    return (
        <div>
            <ShowMessage />
            <div>
                <Product id="1" name="iphone" price="1000" /><button ><a href=""></a>Click here  </button>
                <Product id="2" name="samsung" price="2000" />
                <Product id="3" name="iphone" price="3000" />
            </div>
            <Foot />
        </div>
    )
}
export default Hello;
import "./product.css"
import QuantityPicker from './quantityPicker';
import { useState } from 'react';

const Product = (props) => {
    let[quantity, setQuantity] = useState(1);

    const quantityChange = (value) => {
        setQuantity(value);
        };

    
    return (
        <div className="product">
            <img src={"/images/" + props.data.image} alt="" />
            <h2>{props.data.title}</h2>
            <label class="fw-light fs-6">Price : ${props.data.price}</label>
            <label class="fw-light fs-6">Total : ${props.data.price * quantity}</label>
            <QuantityPicker onChange={quantityChange}></QuantityPicker>
            <button className="btn btn-secondary btn-sm">Add</button>
        </div>
    );
    }
    export default Product;

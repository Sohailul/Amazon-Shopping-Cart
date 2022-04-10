import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Product.css';

const Product = ({ product, handleAddToCart }) => {
    const { img, name, seller, price, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-title">Price: $ {price}</h6>
                <p className='card-text'>Brand: {seller}</p>
                <p className='card-text'>Ratings: {ratings} Stars</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>

        </div>
    );
};

export default Product;
import React from 'react';
import './Product.scss';
import saleTag from '../../assets/images/icons/sale.svg';
import classNames from 'classnames';
import { API_URL } from '../../modules/api';

function Product({
  id, 
  title, 
  imageUrl, 
  currency, 
  isDiscounted, 
  price, 
  priceAfterDiscount, 
  addToCartCallback,
  isHidden,
}) {
  const addToCartClick = () => {
    if (addToCartCallback) {
      addToCartCallback(id);
    }
  };

  return (
    <div className={classNames(['product', { 'product--is-hidden': isHidden }])} key={id}>
      <div className="product__thumbnail-wrapper">
        <div className="product__thumbnail-dummy"></div>
        <figure>
          <img className="product__thumbnail" src={`${API_URL}/${imageUrl}`} alt="product" />
        </figure>
        {isDiscounted && 
          <img className="product__sale-tag" src={saleTag} alt="sale-tag" />
        }
      </div>
      <button className="product__add-to-cart" onClick={addToCartClick}>Add to cart</button>
      <p className="product__title">{title}</p>
        {isDiscounted ? (
            <p className="product__price">
              <span className="product__old-price">{currency}{price}</span>
              <span className="product__current-price">{currency}{priceAfterDiscount}</span>
            </p>
          ) : (
            <p className="product__price">
              <span className="product__current-price">{currency}{price}</span>
            </p>
          )
        }
    </div>
  );
}

export default Product;

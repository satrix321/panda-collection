import React, { useEffect, useState } from 'react';
import './App.scss';
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner';
import Product from '../components/Product/Product';
import Filters from '../components/Filters/Filters';

import { getProductsData } from '../modules/api';

function App() {
  const [products, setProducts] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCounter, setCartCounter] = useState(0);
  const [colorFilter, setColorFilter] = useState([
    { name: 'blue', color: '#32add6', type: 'blue', state: false },
    { name: 'pastel yellow', color: '#c9bd89', type: 'yellow', state: false },
    { name: 'lime green', color: '#a2ce79', type: 'lime', state: false },
    { name: 'mint', color: '#97bfb8', type: 'mint', state: false }
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProductsData();
        setProducts(data);
      } catch (e) {
        console.error(e);
        alert(`Error while fetching products data: ${e}`);
      }
    }

    fetchData();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const addToCart = () => {
    setCartCounter(cartCounter + 1);
  }

  const colorfilterChange = (colorType) => {
    const tempArray = [...colorFilter];
    const color = tempArray.find((item) => item.type === colorType);
    color.state = !color.state;
    setColorFilter(tempArray);
  }

  const selectedColors = colorFilter.filter(item => item.state).map(item => item.type);
  const mappedProducts = products
    .map((product) =>
      <Product
        key={product.id}
        id={product.id}
        title={product.title}
        imageUrl={product.images.thumbnail}
        currency={product.currency}
        isDiscounted={product.prices.after_discount ? true : false}
        price={product.prices.base}
        priceAfterDiscount={product.prices.after_discount}
        addToCartCallback={addToCart}
        isHidden={selectedColors.length !== 0 && !selectedColors.includes(product.attributes.colors)}
      />
    );

  return (
    <div className="app">
      <Header cartCounter={cartCounter} isMenuOpen={isMenuOpen} menuClickCallback={toggleMenu}/>
      <Banner>Panda Collection</Banner>
      <div className="content">
        <Filters colorFilter={colorFilter} colorFilterChangeCallback={colorfilterChange}/>
        <main className="product-list">
          {mappedProducts}
        </main>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
    const imgCarrito = "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-shopping-cart-icon-image_1144330.jpg";
  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Imagen de un carrito de compras" />
        <strong className='strongcolor'> 7 </strong>
    </div>
  )
}

export default CartWidget
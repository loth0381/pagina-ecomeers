import React from 'react';
import { motion } from 'framer-motion';
import '../../style/product-card.css';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import {  toast } from 'react-toastify';


import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/slices/cartSlices';

const ProductCard = ({ item }) => {

  const dispatch = useDispatch()

  const addToCart =()=>{
    dispatch(
      cartActions.addItem({
      id: item.id,
      productName: item.productName,
      price: item.price,
      imgUrl: item.imgUrl,
    })
    ); 
    toast.success('product added successfully');/*este codigo es de la animacion de la compra o agregacion al carrito*/
  }; 

/*codigo del imagenes y textos para vincular*/
  return (
    <Col lg='3' md='4'>
        <div className='product__item'>
    <div className='product__img'>
      <Link to={`/Shop/${item.id}`}><motion.img whileHover={{scale:0.9}} src={item.imgUrl} alt=''/></Link>
    </div>
    <div className='p-2 product__info'> 
    <h3 className='product__name'><Link to={`/Shop/${item.id}`}>{item.productName}</Link></h3>
    <span >{item.category}</span>
    </div>
    <div className='product__card-bottom d-flex align-items-center justify-content-between p-2'>
        <span className='price'>${item.price}</span>
        <motion.span whileTap={{scale:1.2}} onClick={addToCart}>
        <i class='ri-add-line'></i>
        </motion.span>
    </div>
   </div>
    </Col>
   
  );
};


export default ProductCard
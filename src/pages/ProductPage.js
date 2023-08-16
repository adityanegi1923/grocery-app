import 'tailwindcss/tailwind.css';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import productData from '../cards/productData';
import { CartState } from '../components/Context';

const ProductPage = () => {
  const { productId } = useParams(); 
  const products = productData;
  const product = products[productId]; 
  const { dispatch } = CartState();
  
  const [images, setImages] = useState({
    img1: product.img1,
    img2: product.img2,
    img3: product.img3,
    img4: product.img4,
  });

  const [activeImg, setActiveImage] = useState(images.img1);
  const [amount, setAmount] = useState(product.initialCounter);

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.imageSrc,
        qty: amount,
      },
    });
  };

  
  return (
    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
      <div className='flex flex-col gap-6 lg:w-2/4'>
        <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
        <div className='flex flex-row justify-between h-24'>
          <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)} />
          <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)} />
          <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)} />
          <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)} />
        </div>
      </div>
      <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
          <span className=' text-violet-600 font-semibold'>{product.title}</span>
          <h1 className='text-3xl font-bold'>{product.subtitle}</h1>
        </div>
        <p className='text-gray-700'>
          {product.description}
        </p>
        <h6 className='text-2xl font-semibold'>₹ {product.price.toFixed(2)}</h6>
        <div className='flex flex-row items-center gap-12'>
          <div className='flex flex-row items-center'>
            <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => Math.max(prev - 1, 0))}>-</button>
            <span className='py-4 px-6 rounded-lg'>{amount}</span>
            <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
          </div>
          <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full' onClick={handleAddToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

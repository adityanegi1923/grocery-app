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
    <div className='flex justify-center items-center p-8'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-center w-full max-w-screen-xl'>
        <div className='flex flex-col gap-6'>
          <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl' />
          <div className='flex justify-between space-x-4'>
            {Object.values(images).map((imgSrc, index) => (
              <img
                key={index}
                src={imgSrc}
                alt={`Image ${index}`}
                className='w-24 h-24 rounded-md cursor-pointer'
                onClick={() => setActiveImage(imgSrc)}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <div>
            <span className='text-violet-600 font-semibold'>{product.title}</span>
            <h1 className='text-3xl font-bold'>{product.subtitle}</h1>
          </div>
          <p className='text-gray-700'>{product.description}</p>
          <h6 className='text-2xl font-semibold'>₹ {product.price.toFixed(2)}</h6>
          <div className='flex items-center space-x-12'>
            <div className='flex items-center space-x-4'>
              <button
                className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl'
                onClick={() => setAmount((prev) => Math.max(prev - 1, 0))}
              >
                -
              </button>
              <span className='py-4 px-6 rounded-lg'>{amount}</span>
              <button
                className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl'
                onClick={() => setAmount((prev) => prev + 1)}
              >
                +
              </button>
            </div>
            <button
              className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl'
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
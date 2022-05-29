import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import useProducts from '../Hooks/useProducts';

const ProductItem = () => {
    const [products] = useProducts();

    return (
        <>
            <div className='container mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    {
                        products.map((product, index) => (
                            <div key={index} className='product-item bg-white border border-[#ececec] hover:border-primary rounded-[15px] transition-all'>
                                <img src={product.img} alt={product.name} className='h-72 object-cover rounded-[15px]' />
                                <div className='p-6'>
                                    <h3 className='text-xl text-[#253D4E] font-bold'>{product.name}</h3>
                                    <ul className='py-2 flex flex-wrap gap-3 items-center text-sm'>
                                        <li className='text-[#adadad]'>Minimum: <span className='text-primary font-bold'>${product.minOrder}</span></li>
                                        <li className='text-[#adadad]'>Available: <span className='text-primary font-bold'>${product.available}</span></li>
                                    </ul>
                                    <p className='text-[#7E7E7E] text-sm text-justify'>{product.content}</p>
                                    <div className='pt-5 flex flex-wrap gap-3 justify-between items-center'>
                                        <span className='text-primary block text-lg font-bold'>${product.price}</span>
                                        <Link to={`/products/${product._id}`} className='btn btn-light-primary bg-light'><BsCart3 className='mr-2' /> Order</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default ProductItem;
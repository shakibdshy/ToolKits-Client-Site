import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const url = 'http://localhost:5000/tools';
            const { data } = await axios.get(url);
            setProducts(data);
        }
        getProducts();
    }, [])

    return [products, setProducts];
};

export default useProducts;
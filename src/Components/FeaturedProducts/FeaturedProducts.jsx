import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { CartContext } from '../../Context/CartContext';
import toast from 'react-hot-toast';
import { ProductContext } from '../../Context/ProductContext';
import ProductCard from '../ProductCard/productCard.component';
import { Grid } from '@mui/material';

export default function FeaturedProducts() {
    const [products, setProducts] = useState([]);

    let { isLoading, setIsLoading, createCart, setNumOfCartItems } = useContext(CartContext);
    let { getAllProducts } = useContext(ProductContext);

    async function getProducts() {
        let { data } = await getAllProducts();
        setProducts(data.data);
        setIsLoading(false);
    }

    async function generateCart(productId) {

        let response = await createCart(productId);

        if (response.message == 'error' || response.message == "Network Error") {
            toast.error('Failed to add product', {
                position: 'top-center',
                className: "text-center text-white bg-danger border-2 box-shadow"
            });
        } else if (response.data.status === 'success') {
            toast.success(response.data.message, {
                position: 'top-center',
                className: "text-center border-success border-2 box-shadow"
            });
            setNumOfCartItems(response.data.numOfCartItems);
        }
    }

    useEffect(() => {
        getProducts();

    }, []);
    return (
        <>
            <Grid container spacing={2}>

                {isLoading ? <Loading /> : <>
                    {products.map((product) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                            <ProductCard key={product.id} product={product} generateCart={generateCart} />
                        </Grid>
                    ))}
                </>}
            </Grid>

        </>
    );
}

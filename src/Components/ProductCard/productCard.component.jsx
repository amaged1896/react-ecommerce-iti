import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Container, Typography, useTheme } from '@mui/material';
import { Link, Navigate, useNavigate } from 'react-router-dom';


const ProductCard = ({ product, generateCart }) => {
    const navigate = useNavigate();
    console.log(product);
    const theme = useTheme();

    return (
        <Container>
            <Card sx={{ maxWidth: 300 }}>
                <Link to={`/product-details/${product.id}`}>
                    <CardMedia
                        component="img"
                        height="fit-content"
                        width='fit-content'
                        image={product.imageCover}
                        alt={product.name}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {product.description.split(' ').splice(0, 5).join(' ')}
                        </Typography>
                        <Typography variant="body1" color="text.primary">
                            Price: {product.price}
                        </Typography>
                        {product.priceAfterDiscount ? (
                            <>
                                <Typography><s className='text-warning'>{product.price} EGP</s> <br /> {product.priceAfterDiscount} EGP</Typography>
                            </>
                        ) : (
                            <p>{product.price} EGP</p>
                        )}
                        <div>
                            <i className='fa fa-star rating-color'></i>
                            {product.ratingsAverage}
                        </div>
                    </CardContent>
                </Link>
                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <Button onClick={() => generateCart(product._id)} size="small">Add To Cart</Button>
                    <Button size="small" onClick={() => navigate(`/product-details/${product.id}`)}>See More</Button>
                </CardActions>
            </Card >

        </Container>
    );
};

export default ProductCard;

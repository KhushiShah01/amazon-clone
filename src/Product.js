import React from 'react'
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider';

function Product({id, title, image, price, rating}) {
    // dispatch is how we manipulate the data
    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch item to data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='product'>
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <p className="product__rating">
                    {Array(rating).fill().map((_, i) => (<p><StarIcon/></p>))}                    
                </p>
            </div>
            <img src={image} alt=""/>
            
            <button onClick={addToBasket} >Add to basket</button>
        </div>
    )
}

export default Product

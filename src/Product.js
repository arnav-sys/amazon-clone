import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
import { store } from 'react-notifications-component';

function Product({ id, title, image, price, rating }) {
    const [{ }, dispatch] = useStateValue();

    const addToBasket = () => {
        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            },
        });

        store.addNotification({
            title: "Added successfully to the basket!",
            message: title + " - $" + price,
            type: "success",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });
    };

    return (
        <div className="product">
            <div className="product__info">
                <p> {title} </p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    <p>{Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span className="star" role="img" aria-label="star">⭐</span>
                        ))}
                    </p>
                </div>
            </div>

            <img
                src={image}
                alt=""
            />

            <button className='fade' onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product

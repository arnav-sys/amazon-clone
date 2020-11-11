import React, { useState } from 'react'
import './CheckoutProduct.css'
import FlipMove from "react-flip-move"
import { useStateValue } from './StateProvider'
import { store } from 'react-notifications-component';

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
    const [{ }, dispatch] = useStateValue();
    const [fadeOut, setFadeOut] = useState(0)

    const removeFromBasket = () => {
        setFadeOut(1);
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })

        store.addNotification({
            title: "Removed from the basket!",
            message: title + " - $" + price,
            type: "danger",
            insert: "top",
            container: "bottom-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            dismiss: {
                duration: 3000,
                onScreen: true
            }
        });
    }

    return (

        <div className={fadeOut > 0 ? 'checkoutProduct fade-out' : 'checkoutProduct'} onAnimationEnd={() => setFadeOut(0)}>

            <img className='checkoutProduct__image' src={image} alt="" />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>
                    {title}
                </p>
                <p className='checkoutProduct__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    <p>{Array(rating)
                        .fill()
                        .map((_, i) => (
                            <span className="star" role="img" aria-label="star">⭐</span>
                        ))}
                    </p>
                </div>

                {!hideButton && (
                    <button className="checkoutProduct__button" onClick={removeFromBasket}>Remove from basket</button>
                )}

            </div>
        </div >
    )
}

export default CheckoutProduct

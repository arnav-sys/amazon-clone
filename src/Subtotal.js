import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from './StateProvider';
import { useHistory } from 'react-router-dom';
import { store } from 'react-notifications-component';

function Subtotal() {
    const [{ basket }] = useStateValue();

    const history = useHistory();
    let subTotalPrice = basket.reduce((amount, item) => { return amount + item.price }, 0);

    const handleCheckout = () => {
        if (subTotalPrice === 0) {
            store.addNotification({
                title: "Basket is empty",
                message: "You need something in the basket to checkout! Please click on 'Go shopping' and add some items",
                type: "danger",
                insert: "top",
                container: "bottom-right",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 4000,
                    onScreen: true
                }
            });
        } else {
            history.push('/payment');
        }
    }

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={subTotalPrice}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />

            <button onClick={handleCheckout}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

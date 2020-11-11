import React, { useState, useEffect } from 'react'
import "./Orders.css";
// import "./Login.css";
import { db } from "./firebase";
import Order from './Order';
import { useStateValue } from './StateProvider';
import { useHistory, Link } from 'react-router-dom';
import { store } from 'react-notifications-component';

function Orders() {
    const [{ user }, dispatch] = useStateValue();
    const [orders, setOrders] = useState([]);
    const history = useHistory();


    useEffect(() => {
        if (user)
            db
                .collection('users')
                .doc(user?.uid)
                .collection('orders')
                .orderBy('created', 'desc')
                .onSnapshot(snapshot => (
                    setOrders(snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    })))
                ))
        else {
            setOrders([])
            store.addNotification({
                title: "Login required!",
                message: "Please login to see your orders",
                type: "info",
                insert: "top",
                container: "top-center",
                animationIn: ["animated", "fadeIn"],
                animationOut: ["animated", "fadeOut"],
                dismiss: {
                    duration: 4000,
                    onScreen: true
                }
            });
            history.push('/login');
        }
    }, [user])

    console.log(orders);

    return (
        <div className="orders">
            <h1>Your orders</h1>

            <div className="">
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders

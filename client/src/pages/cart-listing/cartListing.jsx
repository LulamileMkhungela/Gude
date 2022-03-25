import React, {useEffect, useState} from "react";

import './cartListing.scss';
import Cart from "../../components/cart/cart";
import post from "../../post";
import RespComponent from "../../components/resp-component/respComponent";
import {useSelector} from "react-redux";

const CartListing = () => {

    const _user_id = useSelector(state => state.userLoggedInData.userInfo.id);
    const [carts, setCarts] = useState([]);
    const [noCarts, setNoCarts] = useState(false);
    const [noCartsMsg, setNoCartsMsg] = useState('');
    const [showResp, setShowResp] = useState(false)
    useEffect(async () => {
        if (_user_id !== undefined){
            try {
                await post('http://localhost:8080/add/cart/all', {
                    _user_id: _user_id
                }).then(resp => {
                    if (resp.data.err) {
                        setShowResp(true)
                    } else {
                        if (resp.data.hasOwnProperty('count')) {
                            setNoCarts(true)
                            setNoCartsMsg(resp.data.msg)
                        } else {
                            console.log(resp.data.cart_data)
                            setCarts(resp.data.cart_data)
                        }
                    }
                })
            } catch (e) {
                console.log(e)
            }
        }
    }, [_user_id])
    return (
        <div className={'cart-listing'}>
            {
                showResp ? <RespComponent err={false} msg={'Error Occurred Fetching Your Cart Items'}/> : ''
            }
            <div className={'row header'}>
                <div className={'col-lg-6 '}>
                    <div className={'cart-listing-heading'}>
                        <p>My Cart</p>
                    </div>
                </div>
                <div className={'col-lg-6 pd-10'}>
                    <div className={'select-all'}><label>Select all</label>&nbsp;&nbsp;&nbsp;<input type={'checkbox'}/>
                    </div>
                </div>
            </div>
            {
                noCarts ? <div className={'alert alert-info'}><p>{noCartsMsg}</p></div> : ''
            }
            {
                carts ? carts.map((cart, i) => {
                    return <Cart cart={cart} key={i}/>
                }) : ''
            }
        </div>
    )
}

export default CartListing;
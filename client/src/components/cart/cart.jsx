import React, {useState} from 'react';

import './cart.scss';

import img from '../../images/img.png';
import img1 from '../../images/default_img.png';
import RespComponent from "../resp-component/respComponent";
import post from "../../post";
import {withRouter} from "react-router-dom";
import Cart_Modal from '../cart-modal/Cart_Modal';

const Cart = ({cart, history}) => {
    let [quantity, setQuantity] = useState(1);
    const [showResp, setShowResp] = useState(false)
    const [respMsg,setRespMsg] = useState('');
    const [showModal, setShowModal] = useState(false)

    const closeModal = () => setShowModal(false);

    const subQuantity = () =>{
        setShowResp(false)
        if (quantity === 1) {
            setShowResp(true)
            setRespMsg('You Cannot Have A Negative Quantity Value')
        } else {
            setQuantity(quantity - 1)
        }
    }
    const addQuantity = () => {
        setShowResp(false)
        if (quantity >= cart.quantity) {
            setShowResp(true)
            setRespMsg('The Seller Has Only ' + cart.quantity)
        } else {
            setQuantity(quantity + 1)
        }
    }
    const deleteCartItem = async () => {
        setShowResp(false)
        try{
            await post('http://localhost:8080/add/cart/delete', {_id: cart._id}).then(resp => {
                if (resp.data.err){
                    setShowResp(true)
                    setRespMsg(resp.data.msg)
                }else{
                    setShowResp(true)
                    setRespMsg(resp.data.msg)
                    setTimeout(() => {
                        history.go(0)
                    }, 2000)
                }
            })
        }catch (e) {
            console.log(e)
        }
    }
    return (
        <>
            {
                showModal ? <div onClick={closeModal} className="cart-back-drop"></div> : null
            }
            <Cart_Modal showModal={showModal} closeX={closeModal} />
        <div className={'single-cart'}>
            {
                showResp ? <RespComponent err={true} msg={respMsg} /> : ''
            }
            <div className={'row p0'}>
               

                <div className={'col-lg-5 p0'}>
                    <div className={'cart-img'}>
                        <img src={cart.product_img_url} alt={''}/>
                    </div>
                </div>

                <div className={'col-lg-7 p0'}>

                    <div className={'row heading p0'}>
                        <div className={'col-lg-10 title p0'}>
                            <p>{cart.title}</p>
                        </div>
                        <div className={'col-lg-2 select p0'}>
                            <input type={'checkbox'}/>
                        </div>
                    </div>

                    <div className={'qty'}>
                        <p>{cart.quantity} Available / {cart.condition}</p>
                    </div>

                    <div className={'row cart-num p0'}>
                        <div className={'col-lg-8 p0'}>
                            <span>IMEI : </span> <span>8r7t98e8w9tw9re0r7t89</span>
                        </div>
                        <div className={'col-lg-4 p0'}>
                            <p>R{cart.price * quantity}</p>
                        </div>
                    </div>

                    <div className={'cart-location'}>
                        <p>Location : <span>{cart.location}</span></p>
                    </div>

                    <div className={'row cart-user-info'}>
                        <div className={'col-lg-6 cart-user-details'}>
                            <div className={'col-lg-2'}>
                                <img src={img1} alt={''}/>
                            </div>
                            <div className={'col-lg-10'}>
                                <p>Khodani Mokwena</p>
                            </div>
                        </div>
                        <div className={'col-lg-6 cart-date'}>
                            <p>Listed on : {cart.createdAt}</p>
                        </div>
                    </div>

                    <div className={'row cart-btn'}>
                        <div className={'col-lg-5 cart-qty'}>
                            <span onClick={() => {
                                subQuantity()
                            }}>-</span><span>{quantity}</span><span onClick={() => {
                            addQuantity()
                            }}>+</span>
                        </div>
                        <div className={'col-lg-5 cart-checkout-btn'}>
                            <button onClick={() => setShowModal(true)} className={'btn btn-default'}>Proceed To Checkout</button>
                        </div>
                        <div className={'col-lg-2 cart-delete'}>
                            <i onClick={()=>deleteCartItem()} className={'fa fa-trash'}> </i>
                        </div>
                    </div>

                </div>

            </div>
        </div>
        </>
    )
}

export default withRouter(Cart);
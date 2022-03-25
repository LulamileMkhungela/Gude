import React, {useEffect, useState} from "react";


import defaultImg from '../../images/default_img.png';

import './detailProduct.scss';
import {withRouter} from "react-router-dom";
import post from "../../post";
import DetailProductMsg from "../../components/detail-product/detailProductMsg";
import DetailProductMsgView from "../../components/detail-product/detailProductMsgView";

const DetailProduct = ({history}) => {
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(false)
    const [fetched, setFetched] = useState(false)
    const [description, setDescription] = useState(true);
    const [paymentMethods, setPaymentMethod] = useState(false)
    const [messaging, setMessaging] = useState(false)
    const [moreItems, setMoreItems] = useState(false)
    useEffect(async () => {
        setLoading(true)
        const product_id = history.location.pathname.split('/')[2];
        await post(`http://localhost:8080/products/single-product`, {
            product_id: product_id,
        }).then(resp => {
            console.log(resp.data)
            setProduct(resp.data)
            setLoading(false)
            setFetched(true)
        })
    }, [])

    const desc = () => {
        setDescription(true)
        setPaymentMethod(false)
        setMessaging(false)
        setMoreItems(false)
    }
    const msg = () => {
        setDescription(false)
        setPaymentMethod(false)
        setMessaging(true)
        setMoreItems(false)
    }

    if (loading) {
        return (
            <div
                className={'center'}
                style={{marginTop: '20px'}}>
                <div className={'loader'}> </div>
            </div>
        )
    } else {
        return (
            <div className={'detail-product'}>
                <div className={'product-details'}>
                    <div className={'product-details-img bd'}>
                        {
                            fetched ? <img className={'bd'} src={product.product_info.product_img_url} alt={''}/> : ''
                        }
                    </div>
                    <div className={'product-info'}>
                        <div className={'row'}>
                            <div className={'col-lg-11'}>
                                <div className={'product-name'}>{fetched ? product.product_info.title : ''}</div>
                            </div>
                            <div className={'col-lg-1'}>
                                <i className={'fa fa-ellipsis-v'}> </i>
                            </div>
                        </div>
                        <div className={'quantity'}>
                            <span> {fetched ? product.product_info.quantity + ' Available / ' + product.product_info.condition : ''}</span>
                        </div>
                        <div className={'row'}>
                            <div className={'col-lg-8'}>
                                <div className={'imei-number'}><
                                    span>IMEI : </span> <i>iwqd37673289v33529</i></div>
                            </div>
                            <div className={'col-lg-4'}>
                                <div className={'price'}>{fetched ? 'R' + product.product_info.price : ''}</div>
                            </div>
                        </div>
                        <div className={'row'}>
                            <div className={'col-lg-7'}>
                                <div className={'location'}><
                                    span>Location : {fetched ? product.product_info.location : ''}</span>
                                </div>
                            </div>
                            <div className={'col-lg-5'}>
                                <div className={'list-date'}>Listed on
                                    : {fetched ? product.product_info.createdAt : ''}</div>
                            </div>
                        </div>
                        <div className={'poster-info'}>
                            <div className={'poster-pro-img'}>
                                <img src={defaultImg} alt={''}/>
                                <span>{fetched ? product.user_info.firstname + ' ' + product.user_info.lastname : ''}</span>
                            </div>
                        </div>

                        <div className={'product-desc'}>
                            <span>***************************</span>
                            <br/>
                            <span>Description</span>
                            <br/>
                            <span>**************************</span>
                            <p>
                                {fetched ? product.product_info.desc : ''}
                            </p>
                        </div>
                        <div className={'row btn-bottom'}>
                            <div className={'col-lg-4'}>
                                <button className={'btn btn-default cart'}>
                                    ADD TO CART<i className={'fa fa-shopping-bag'}> </i>
                                </button>
                            </div>
                            <div className={'col-lg-4'}>
                                <button className={'btn btn-default wishlist'}>
                                    WISHLIST <i className={'fa fa-heart-o'}> </i>
                                </button>
                            </div>

                            <div className={'col-lg-4'}>
                                <button className={'btn btn-default checkout'}>CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'product-links '}>
                    <ul className={''}>
                        <li className={''} onClick={e => desc()}>
                            <p>Description</p>
                        </li>
                        <li className={''}>
                            <p>Payment Methods</p>
                        </li>
                        <li className={''} onClick={e => msg()}>
                            <p>Messaging</p>
                        </li>
                        <li className={''}>
                            <p>More items from this seller</p>
                        </li>
                    </ul>

                </div>
                {
                    description ? <div className={'description'}>
                            <span>***********************************</span><br/>
                            <span>Description</span><br/>
                            <span>**********************************</span><br/>
                            {fetched ? product.product_info.desc : ''}
                        </div>
                        : ''
                }
                {
                    messaging ? <div><DetailProductMsgView /></div> : ''
                }
            </div>
        )
    }

}
export default withRouter(DetailProduct);
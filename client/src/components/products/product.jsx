import React, {useState} from "react";

import './product.scss';
import {useDispatch, connect, useSelector} from "react-redux";
//import post from "../../post";
//import RespComponent from "../resp-component/respComponent";
import {Link} from "react-router-dom";

import img from '../../images/default_img.png';
import {addToCartXhr} from "../../states/add-to-cart/addToCartAction";
import { addToWishListXhr } from "../../states/add-to-wishlist/addWishListAction"

const Product = ({ product }) => {
    const dispatch = useDispatch()
    const userId = useSelector(state => state.userLoggedInData.userInfo.id)
    const productImages = product.product_info.product_img_url
    const [imgIndex,setImgIndex] = useState(0)
    
    const addToCart = (e) => {
        e.preventDefault()
        if (userId !== product.product_info._user_id){
            dispatch(addToCartXhr(product.product_info,userId))
        } 
    }

    const addToWishList = (e) => {
        e.preventDefault()
        if (userId !== product.product_info._user_id) {
            dispatch(addToWishListXhr(product.product_info, userId))
        }
    }
    return (
        <div className={'col-lg-4 single-product'}>
            <div className={'space-product'}>
                <div className={'product-img'}>
                    <Link to={`/home/${product.product_info._id}`}>
                        {
                            productImages.map((productImage, i) => (
                                imgIndex === i && <img src={productImage} alt={''} key={i}/>
                            ))
                        }
                    </Link>
                </div>
                <i className="material-icons slide-left" onClick={()=>setImgIndex(imgIndex === productImages.length - 1 ? 0 : imgIndex + 1 )}>keyboard_arrow_left</i>
                <i className="material-icons slide-right" onClick={()=>setImgIndex(imgIndex === 0? productImages.length - 1 : imgIndex - 1 )}>keyboard_arrow_right</i>
                <div className={'profile-img'}>
                    <img src={img} alt={''} className={'bd'} />
                </div>
                <div className={'product-name'}>
                    <span>{product.product_info.title}</span>
                </div>
                <br/>
                <div className={'quantity'}>
                    <span>{`${product.product_info.quantity} Available / ${product.product_info.condition}`}</span>
                </div>
                <br/>
                <div className={'row sku-num'}>
                    <div className={'col-lg-8 sku-number'}>
                        <span>SKU Number : 09403049305t4863</span>
                    </div>
                    <div className={'col-lg-4 price'}>
                        <span>{product.product_info.price > 0 ? 'R' + product.product_info.price : 'Freebies'}</span>
                    </div>
                </div>
                <div className={'row product-btn'}>
                    <div className={'col-lg-6 add-to-cart'}>
                        <button onClick={(e)=>{
                            addToCart(e)
                        }} className={'btn btn-default'}>
                            <i className={'fa fa-shopping-bag'}> </i>ADD TO CARD
                        </button>
                    </div>
                    <div className={'col-lg-6 add-to-wishlist'}>
                        <button onClick={(e) => {
                            addToWishList(e)
                        }} className={'btn btn-default'}>
                            <i className={'fa fa-heart-o'}> </i> WISHLIST
                        </button>
                    </div>
                </div>
                <br />
                <div className={'col-location'}>
                    <span>Location : {product.product_info.location}</span>
                </div>
                <br />
                <div className={'list-date'}>
                    <span>Listed on : {product.product_info.createdAt}</span>
                </div>
            </div>
        </div>
    )
}
export default connect()(Product);
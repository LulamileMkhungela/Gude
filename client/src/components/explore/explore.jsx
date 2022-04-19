import React, {useEffect, useState} from "react";

import './explore.scss';
import {Link, Redirect, withRouter} from "react-router-dom";
import PromoProduct from "../products/promoProduct";

import {useDispatch, useSelector} from "react-redux";
//import {fetchProducts} from "../../states/fetch-products/fetchProductsAction";
import Product from "../products/product";
//import login from "../../pages/login/login";
//import {getItemCount} from "../../states/add-to-cart/addToCartAction";
import RespComponent from "../resp-component/respComponent";

const Explore = () => {

    const loading = useSelector(state => state.productData.products.loading)
    const products = useSelector(state => state.productData.products)
    const isLoggedIn = useSelector(state => state.userLoggedInData.isLoggedIn)
    const isAdded = useSelector(state => state.addToCart.added)

    useEffect(() => {

    }, [])
    return (

        <div className={'explore'}>
            {
                loading ? <div className={'center'} style={{marginTop: '20px'}}>
                    <div className={'loader'}> </div>
                </div> : ''
            }
            {
                products.length > 0 && !isLoggedIn ? <Redirect to={'/login'} /> : ''
            }
            {
                isAdded === false ? <RespComponent err={false} msg={'Item Already Added'} /> : ''
            }
            {/*<div className={'by-category'}>*/}
            {/*    <ul>*/}
            {/*        <li>*/}
            {/*            <Link to={''}>New Arrivals</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to={''}>On Sale</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to={''}>Black Friday</Link>*/}
            {/*        </li>*/}
            {/*        <li>*/}
            {/*            <Link to={''}>Weekly Sale</Link>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <br/>
            <div className={'row'}>
                <div className={'col-lg-9'}>
                    {/*<PromoProduct/>*/}
                    {
                        products.length > 0 && products.map((product, i) => {
                            return <Product product={product} key={i}/>
                        })
                    }
                </div>
                <div className={'col-lg-3'}>
                {/*  Add Filters To Be Saved In The Database & Reset Button To Reset To Initial Filters  */}
                </div>

            </div>
        </div>
    )

}

// const mapStateToProps = state =>{
//     return{
//         userLoggedInData : state.userLoggedInData
//     }
// }
//
// const mapDispatchToProps = dispatch => {
//     return{
//         fetchUsersInfo : (jwt) => dispatch(fetchUserInfo(jwt))
//     }
// }

export default (withRouter(Explore));
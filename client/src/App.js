import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import Login from "./pages/login/login";

import './global.css';
import './App.css';
import Register from "./pages/register/register";
import Forgot from "./pages/forgotpassword/Forgot";
import Reset from "./pages/forgotpassword/Reset";
import ActivationEmail from "./components/activation-email/ActivationEmail";
import Student from "./pages/student/student";
import Recovery from "./pages/recovery/recovery";
import Explore from "./components/explore/explore";
import Root from "./pages/root/root";
import DetailProduct from "./pages/detail-product/detailProduct";
import AddProduct from "./pages/add-product/addProduct";
import CartListing from "./pages/cart-listing/cartListing";
import Electronics from "./pages/electronics/electronics";
import Outdoors from "./pages/outdoors/outdoors";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfo} from "./states/user-loggedin-info/fetchUserInfoAction";
import {fetchProducts} from "./states/fetch-products/fetchProductsAction";
import {getItemCount} from "./states/add-to-cart/addToCartAction";
import Home from "./gude-mobile/pages/home/home";
import Profile from './pages/profile/Profile';
import MobileExplore from "./gude-mobile/pages/mobile-explore/mobileExplore";
import MobileProductPromo from "./gude-mobile/components/mobile-product/mobileProductPromo";
import MobileDetailProduct from "./gude-mobile/pages/mobile-detail-product/MobileDetailProduct";
import Messages from "./pages/messages/Messages";
import Promotion from "./pages/promotion/Promotion";
import WishList from "./pages/wish-list/WishList";
import Notification from "./pages/notification/Notification";

const App = () => {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.userLoggedInData.userInfo)
    console.log(userInfo)
    const isLoggedIn = useSelector(state => state.userLoggedInData.isLoggedIn)
    useEffect(() => {
        dispatch(fetchUserInfo(localStorage.getItem('jwt')))
        if (userInfo.id !== ''){
            dispatch(getItemCount(userInfo.id))
            dispatch(fetchProducts())
        }
    },[isLoggedIn])

    return (
        <BrowserRouter>
            <Switch>
                <Route path={'/'} exact>
                    <Redirect to={'/login'}/>
                </Route>
                <Route path={'/login'} component={Login}/>
                <Route path={'/register'} component={Register}/>
                <Route path={'/student-register'} component={Student}/>
                <Route path={'/recovery'} component={Recovery}/>
                <Route path={'/forgot'} component={Forgot}/>
                <Route path={'/user/reset/:token'} component={Reset}/>
                <Route path={'/student/activate/:activation_token'} component={ActivationEmail}/>
                {/*
                Private Routes
              */}
                <Route path={'/home'} exact>
                    {
                        window.screen.width  <= 768 ? <Home> <MobileExplore /> </Home> : <Root> <Explore/> </Root>
                    }
                </Route>
                <Route path={'/home/:product_id'}>
                    {
                        window.screen.width <= 768 ? <Home><MobileDetailProduct /></Home> : <Root><DetailProduct/></Root>
                    }
                </Route>
                <Route path={'/add'}>
                    <Root>
                        <AddProduct/>
                    </Root>
                </Route>/messages
                <Route path={'/cart'}>
                    <Root>
                        <CartListing/>
                    </Root>
                </Route>
                <Route path={'/messages'}>
                    <Root>
                        <Messages/>
                    </Root>
                </Route>
                <Route path={'/wish-list'}>
                    <Root>
                        <WishList/>
                    </Root>
                </Route>
                <Route path={'/notification'}>
                    <Root>
                        <Notification/>
                    </Root>
                </Route>
                <Route path={'/promotion'}>
                    <Root>
                        <Promotion/>
                    </Root>
                </Route>
                <Route path={'/electronics'}>
                    <Root>
                        <Electronics/>
                    </Root>
                </Route>
                <Route path={'/outdoors'}>
                    <Root>
                        <Outdoors/>
                    </Root>
                </Route>
                <Route path={'/profile'}>
                    <Root>
                        <Profile/>
                    </Root>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App;

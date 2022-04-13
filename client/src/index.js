import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {applyMiddleware, combineReducers, createStore} from "redux";
import fetchUserInfoReducer from "./states/user-loggedin-info/fetchUserInfoReducer";
import {Provider} from "react-redux";

import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import fetchProductsReducer from "./states/fetch-products/fetchProductsReducer";
import addToCardReducer from "./states/add-to-cart/addToCardReducer";
import addToWishListReducer from "./states/add-to-wishlist/addWishListReducer";

const reducers = combineReducers({
    userLoggedInData: fetchUserInfoReducer,
    productData : fetchProductsReducer,
    addToCart : addToCardReducer,
    addToWishList: addToWishListReducer,
})

const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

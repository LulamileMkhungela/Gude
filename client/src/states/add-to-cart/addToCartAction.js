import post from "../../post";
import get from "../../get";


export const addToCartProcess = () => {
    return{
        type : 'ADD_TO_CART_PROCESS',
        loading : true,

    }
}

export const addToCartSuccess = (resp) => {
    return{
        type : 'ADD_TO_CART_SUCCESS',
        payload : resp,
    }
}

export const addToCartFailure = resp => {
    return{
        type : 'ADD_TO_CART_FAILURE',
        payload : resp
    }
}

export const fetchItemCount = (resp) => {
    return{
        type : 'FETCH_ITEM_COUNT',
        payload : resp
    }
}

export const addToCartXhr = (productInfo,userId) => {
    return dispatch => {
        dispatch(addToCartProcess())
        const {_id,category,product_img_url,isbn,imei,title,desc,condition,price,quantity,location,payment_method} = productInfo
        try{
            post('http://localhost:8080/add/cart',{
                _product_id : _id,
                category,
                product_img_url,
                isbn,
                imei,
                title,
                desc,
                condition,
                price,
                quantity,
                location,
                payment_method,
                _user_id : userId
            }).then(resp => {

                if (resp.data.err){
                    console.log(resp)
                    dispatch(addToCartFailure(resp.data))
                }
                if (!resp.data.err){
                    console.log(resp)
                    dispatch(addToCartSuccess(resp.data))
                }
            })

        }catch (e) {
            console.log(e)
        }
    }
}

export const getItemCount = (userId) => {
    return dispatch => {
        post('http://localhost:8080/add/cart/count',{_user_id : userId}).then(resp => {
            if (!resp.data.err){
                dispatch(fetchItemCount(resp.data))
            }
        })
    }
}

import post from "../../post";
import get from "../../get";


export const addToWishListProcess = () => {
    return{
        type : 'ADD_TO_WISHLIST_PROCESS',
        loading : true,

    }
}

export const addToWishListSuccess = (resp) => {
    return{
        type : 'ADD_TO_WISHLIST_SUCCESS',
        payload : resp,
    }
}

export const addToWishListFailure = resp => {
    return{
        type : 'ADD_TO_WISHLIST_FAILURE',
        payload : resp
    }
}

export const fetchItemCount = (resp) => {
    return{
        type : 'FETCH_ITEM_COUNT',
        payload : resp
    }
}

export const addToWishListXhr = (productInfo,userId) => {
    return dispatch => {
        dispatch(addToWishListProcess())
        const {_id,category,product_img_url,isbn,imei,title,desc,condition,price,quantity,location,payment_method} = productInfo
        try{
            post('http://localhost:8080/api/wishlist/',{
                _id,
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
                    dispatch(addToWishListFailure(resp.data))
                }
                if (!resp.data.err){
                    console.log(resp)
                    dispatch(addToWishListSuccess(resp.data))
                }
            })

        }catch (e) {
            console.log(e)
        }
    }
}

export const getItemCount = (userId) => {
    return dispatch => {
        post('http://localhost:8080/api/wishlist/count',{_user_id : userId}).then(resp => {
            if (!resp.data.err){
                dispatch(fetchItemCount(resp.data))
            }
        })
    }
}

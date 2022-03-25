import get from "../../get";

export const fetchProductsRequest = () => {
    return{
        type : 'FETCH_PRODUCTS_REQUEST',
    }
}

export const fetchProductsSuccess = respData => {
    return{
        type : 'FETCH_PRODUCTS_SUCCESS',
        payload : respData
    }
}

export const fetchProductsFailure = respData => {
    return{
        type : 'FETCH_PRODUCTS_FAILURE',
        payload : respData
    }
}

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsRequest())
        get('http://localhost:8080/products').then(resp => {
            if (!resp.data.err){
                dispatch(fetchProductsSuccess(resp.data))
            }else{
                dispatch(fetchProductsFailure(resp.data))
            }
        }).catch(e=>{
            console.log(e.message)
        })
    }
}


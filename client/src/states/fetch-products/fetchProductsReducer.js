
const iState = {
    products : [],
    loading : false,
    err : ''
}

const fetchProductsReducer = (state = iState,action) => {
    switch (action.type){
        case 'FETCH_PRODUCTS_REQUEST' :
            return {
                ...state,
                loading: true
            }
        case 'FETCH_PRODUCTS_SUCCESS' :
            return{
                products: action.payload.r,
                loading: false,
                err : ''
            }
        case 'FETCH_PRODUCTS_FAILURE' :
            console.log('Failure Reached')
            return{
                products: [],
                loading: false,
                err: action.payload.msg
            }
        default :
            return state
    }
}

export default fetchProductsReducer;
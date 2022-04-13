const iState = {
    count : 0,
    loading : false,
    added : null,
}

const addToWishListReducer = (state = iState, action) => {

    switch (action.type) {
        case  'ADD_TO_WISHLIST_PROCESS' :
            return {
                ...state,
                loading: true,
                added: null
            }
        case 'ADD_TO_WISHLIST_SUCCESS' :
            return{
                count: action.payload.count,
                loading: false,
                added: true
            }
        case 'ADD_TO_WISHLIST_FAILURE' :
            return{
                ...state,
                loading: false,
                added: false
            }
        case 'FETCH_ITEM_COMPUTE' :
            return{
                ...state,
                count : action.payload.count,
            }
        default :
            return state
    }

}

export default addToWishListReducer
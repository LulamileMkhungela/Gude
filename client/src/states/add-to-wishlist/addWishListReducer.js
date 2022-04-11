
const iState = {
    inDec : 0,
    loading : false,
    added : null,
}

const addToWishListReducer = (state = iState, action) =>{

    switch (action.type) {
        case  'ADD_TO_WISHLIST_PROCESS' :
            return {
                ...state,
                loading: true,
                added: null
            }
        case 'ADD_TO_WISHLIST_SUCCESS' :
            return{
                inDec: action.payload.inDec,
                loading: false,
                added: true
            }
        case 'ADD_TO_WISHLIST_FAILURE' :
            return{
                ...state,
                loading: false,
                added: false
            }
        case 'FETCH_ITEM_COUNT' :
            return{
                ...state,
                inDec : action.payload.inDec,
            }
        default :
            return state
    }

}
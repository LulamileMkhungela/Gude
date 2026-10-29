
const iState = {
    count : 0,
    loading : false,
    added : null,
}

const addToCardReducer = (state = iState, action) =>{

    switch (action.type) {
        case  'ADD_TO_CART_PROCESS' :
            return {
                ...state,
                loading: true,
                added: null
            }
        case 'ADD_TO_CART_SUCCESS' :
            return{
                count: action.payload.count,
                loading: false,
                added: true
            }
        case 'ADD_TO_CART_FAILURE' :
            return{
                ...state,
                loading: false,
                added: false
            }
        case 'FETCH_ITEM_COUNT' :
            return{
                ...state,
                count : action.payload.count,
            }
        default :
            return state
    }

}

export default addToCardReducer;

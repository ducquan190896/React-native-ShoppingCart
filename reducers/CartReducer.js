const initialState = {
    cart: {},
    cartSuccess: false,
    cartError: false,
    message: null
}



export default (state = initialState, action) =>{
    switch(action.type) {
        case "get_Cart":
           
            return {
                ...state,
                cart: action.payload,
                cartSuccess: true

            }
        case "AddCart":
          
            return {
                ...state,
                cart: action.payload,
                cartSuccess: true
            }
        case "deleteItem":
            return {
                ...state,
                cart: action.payload,
                cartSuccess: true
            }
        case "removeItem":
            return {
                ...state,
                cart: action.payload,
                cartSuccess: true
            }
        case "clearItem":
            return {
                ...state,
                cart: action.payload,
                cartSuccess: true
            }
        case "error_cart":
            return {
                ...state,
                cartError: true,
                cartSuccess: false,
                message: action.payload
            }
        case "reset_cart":
            return {
                ...state,
                cartError: false,
                cartSuccess: false,
                message: null
            }
        default:
            return state
    }
}
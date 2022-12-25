const initalState = {
    products: [],
    product: null,
    productSuccess: false,
    productError: false,
    message: false,

}

export default (state = initalState, action) => {
    switch (action.type) {
        case "get_products": 
            return {
                ...state,
                products: action.payload,
                productSuccess: true
            }
        case "get_product":
            return {
                ...state,
                product: action.payload,
                productSuccess: true,
            }
        case "error_product":
            return {
                ...state,
                productError: true,
                message: action.payload
            }
        case "reset_product":
            return {
                ...state,
                productSuccess: false,
                productError: false,
                message: null
            }

        default:
            return state
    }
}
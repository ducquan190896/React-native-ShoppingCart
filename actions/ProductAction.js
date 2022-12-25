export const getProducts = () => async (dispatch, getState) => {
    try {
        const data = await fetch("http://10.0.2.2:5000/products")
        const datajson = await data.json()
        dispatch({
            type: "get_products",
            payload: datajson
        })
    } catch (err) {
        dispatch({
            type: "error_product",
            payload: err
        })
    }
}

export const getProduct = (id) => async (dispatch, getState ) => {
    try {
        const data = await fetch(`http://10.0.2.2:5000/products/${id}`)
        const datajson = await data.json();
        
        dispatch({
            type: "get_product",
            payload: datajson
        })
        
    } catch (err) {
        dispatch({
            type: "error_product",
            payload: err
        })
    }
}

export const resetProduct = () => (dispatch, getState) => {
    dispatch({
        type: "reset_product"
    })
}
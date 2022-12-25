export const getCart = () => async (dispatch, getState) => {
 try {
    const data = await fetch("http://10.0.2.2:5000/cart/1")
    const datajson = await data.json()

    dispatch({
        type: "get_Cart",
        payload: datajson
    })
    // console.log(datajson)

 } catch (err) {
    dispatch({
        type: "error_cart",
        payload: err
    })
 }

}

export const addToCart = (product) => async (dispatch, getState) => {
    try {
        
        const {cart} = getState().CART
       
        const items = cart.items
      
        let item = {
            price: product.price,
            title: product.title,
            image: product.image_url
            
        }
        

        if( items[product.id] == null) {
            item = {
                price: product.price,
                title: product.title,
                image: product.image_url,
                sum: product.price,
                quantity: 1
            }
         
        } else {
            item = items[product.id]
            item.sum = item.sum + product.price
            item.quantity = item.quantity + 1
        }
       
       
       
             cart.items = {...items, [product.id]: item};
            cart.totalQuantity = cart.totalQuantity + 1;
            cart.totalPrice = cart.totalPrice + product.price;
          

        const data = await fetch("http://10.0.2.2:5000/cart/1", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cart)
        })
        const datajson = await data.json()
        console.log(datajson)
        
       dispatch({
            type: "AddCart",
            payload: datajson
        })
      
       

    } catch (err) {
        dispatch({
            type: "error_cart",
            payload: err
        })
    }
  
}

export const deleteItem = (productID) => async (dispatch, getState) => {
    try {
        let {cart} = getState().CART
        let items = cart.items
        let totalQuantity = cart.totalQuantity
        let totalPrice = cart.totalPrice
        let chosenItem = items[productID]
        totalPrice = totalPrice - chosenItem.sum
        totalQuantity = totalQuantity - chosenItem.quantity
        delete items[productID]
        
        cart.items = items;
        cart.totalPrice = totalPrice;
        cart.totalQuantity = totalQuantity

        const data = await fetch("http://10.0.2.2:5000/cart/1", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cart)
        })
        const datajson = await data.json()
        console.log(datajson)
        dispatch({
            type: "deleteItem",
            payload: datajson
        })


    } catch (err) {
        dispatch({
            type: "error_cart",
            payload: err
        })
    }
}

export const decreaseItem = (productId) => async (dispatch, getState) => {
    try {
        let {cart} =  getState().CART
        let totalPrice = cart.totalPrice
        let totalQuantity = cart.totalQuantity
        let items = cart.items
        let item = items[productId]

        if(item.quantity > 1) {
            item.quantity = item.quantity - 1
            item.sum = item.sum - item.price
            totalPrice = totalPrice - item.price
            totalQuantity = totalQuantity - 1
        } else {
            totalPrice = totalPrice - item.price
            totalQuantity = totalQuantity - 1
            delete items[productId]
        }

            cart.items = items
            cart.totalPrice = totalPrice
            cart.totalQuantity= totalQuantity


        const data = await fetch("http://10.0.2.2:5000/cart/1", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cart)
        })
        const datajson = await data.json()
        dispatch({
            type: "removeItem",
            payload: datajson
        })

    } catch (err) {
        dispatch({
            type: "error_cart",
            payload: err
        })
    }
} 

export const clearCart = () => async (dispatch, getState) => {
    try {
        const {cart} = getState().CART
        
            cart.items= {}
            cart.totalPrice= 0,
            cart.totalQuantity= 0
        
        
        const data = await dispatch("http://10.0.2.2:5000/cart/1", {
            method: "PUT",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(cart)
        })

        const datajson = data.json()
        dispatch({
            type: "clearItem",
            payload: datajson
        })


    } catch (err) {
        dispatch({
            type: "error_cart",
            payload: err
        })
    }
}

export const resetCart = () => (dispatch, getState) => {
    dispatch({
        type: "reset_cart"
    })
}


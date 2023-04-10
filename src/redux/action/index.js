// action for adding item to the cart 

export const addCart = (product) => {
    return{
        type : "ADDITEM",
        payload : product
    }
}

// for deleting item
export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : product
    }
}




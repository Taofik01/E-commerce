// For Add Item to Cart
export const addCart = (product) =>{
    return{
        type : "ADDITEM",
        payload : product
    }
}

//for Delete Item From Cart 
export const delItem = (product) => {
    return {
        type : "DELITEM",
        payload : product
    }
}
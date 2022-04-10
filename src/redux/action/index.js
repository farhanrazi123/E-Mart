export const addCart = (Product) => {
    return{
        type : "ADDITEM",
        patload : Product
    }
}

export const delCart = (product) => {
    return{
        type : "DELITEM",
        payload : p
    }
}
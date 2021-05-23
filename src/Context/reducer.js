export const initialState = {
    cart: [],
}

const reducer = (state, action) => {
    console.log(action)
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, action.item]
            }
        case "REMOVE_FROM_CART":
                /* return {
                     ...state,
                    cart: state.cart.filter(item => item.id !== action.id) 
                }*/
                // ürünleri tek tek silmemizi sağlıyor
                // go to the newCart and splice create new array
                const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);
                let newCart = [...state.cart];
            if( index >= 0){
                newCart.splice(index, 1);
            } else{
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket`)
            }
            return{
                ...state,
                cart: newCart
            }
            
        default:
            return state;    
    }
}

// summation products
export const getCartTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0);

export default reducer
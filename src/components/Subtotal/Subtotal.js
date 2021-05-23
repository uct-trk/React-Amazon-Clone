import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Context/StateProvider';
import { getCartTotal } from '../../Context/reducer';

const Subtotal = () => {

    const [state, dispatch] = useStateValue()
    const {cart} = state

    return (
        <div className="subtotal">
           <CurrencyFormat
            renderText={(value) => (
                <>
                <p>
                    Subtotal ({cart.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getCartTotal(cart)} //provide summation products prices
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}/>

            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

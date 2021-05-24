import React from 'react'
import './subtotal.css'
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../../Context/StateProvider';
import { getCartTotal } from '../../Context/reducer';
import { useHistory } from 'react-router-dom';

const Subtotal = () => {

    const history = useHistory()
    const [state, dispatch] = useStateValue()
    const { cart } = state

    const handlePay = (e) => {
        e.preventDefault()
        history.push("/payment")
    }

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
                prefix={"$"} />

            <button onClick={handlePay}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

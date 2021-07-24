import { useState } from "react";

import Button from '../UI/Button/Button'

import './TipCalc.css'

const TipCalc = (props) => {
    const [tipAmount, setTipAmount] = useState(1)
    const [totalAmount, setTotalAmount] = useState(0)

    const handleClick = () => {
        setTipAmount(0)
        setTotalAmount(0)
    }

    return (
        <div className="tipCalcDiv">
            <div className="tipAmountDiv">
                <label htmlFor="#tipAmount">Tip Amount <br /> <span>/ person</span></label>
                <p id="tipAmount">${tipAmount.toFixed(2)}</p>
            </div>

            <div className="totalAmountDiv">
                <label htmlFor="#totalAmount">Total <br /> <span>/ person</span></label>
                <p id="totalAmount">${totalAmount.toFixed(2)}</p>
            </div>
            <div className="resetDiv">
                <Button className="resetBtn" onClick={handleClick}>RESET</Button>
            </div>
        </div>
    )
}

export default TipCalc
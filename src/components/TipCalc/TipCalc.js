import Button from '../UI/Button/Button'

import './TipCalc.css'

const TipCalc = ({ tip, total, setTip }) => {

    const handleClick = () => {
        setTip(0)
    }

    return (
        <div className="tipCalcDiv">
            <div className="tipAmountDiv">
                <label htmlFor="#tipAmount">Tip Amount <br /> <span>/ person</span></label>
                <p id="tipAmount">${tip.toFixed(2)}</p>
            </div>

            <div className="totalAmountDiv">
                <label htmlFor="#totalAmount">Total <br /> <span>/ person</span></label>
                <p id="totalAmount">${total.toFixed(2)}</p>
            </div>
            <div className="resetDiv">
                <Button className="resetBtn" onClick={handleClick}>RESET</Button>
            </div>
        </div>
    )
}

export default TipCalc
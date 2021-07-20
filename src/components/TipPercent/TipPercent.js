import { useState } from "react";

import Button from "../UI/Button/Button";

import './TipPercent.css'

const TipPercent = (props) => {
    const [tipPercent, setTipPercent] = useState('')

    const handleChange = (e) => {
        setTipPercent(e.target.value)
    }

    return (
        <div className="tipDiv">
            <p>Select Tip %</p>
            <div className="row">
                <Button value="0.05">5%</Button>
                <Button value="0.1">10%</Button>
                <Button value="0.15">15%</Button>
            </div>
            <div className="row">
                <Button value="0.25">25%</Button>
                <Button value="0.5">50%</Button>
                <input value={tipPercent} type="number" min="1" step="1" id='tipInput' placeholder="Custom" onChange={handleChange} />
            </div>
        </div>
    )
}

export default TipPercent
import { useState } from "react";

import Button from "../UI/Button/Button";

import './TipPercent.css'

const TipPercent = (props) => {
    const [tipPercent, setTipPercent] = useState('')
    const [btnPercent, setBtnPercent] = useState('')

    const handleChange = (e) => {
        setTipPercent(e.target.value)
    }

    const handleActive = (e) => {
        e.target.classList.add('activeBtn')
        setBtnPercent(e.target.value) // Probs wont be handling this shit here btw
    }

    const handleBlur = (e) => {
        e.target.classList.remove('activeBtn')
    }


    return (
        <div className="tipDiv">
            <p>Select Tip %</p>
            <div className="row">
                <Button value="0.05" onClick={handleActive} onBlur={handleBlur}>5%</Button>
                <Button value="0.1" onClick={handleActive} onBlur={handleBlur}>10%</Button>
                <Button value="0.15" onClick={handleActive} onBlur={handleBlur}>15%</Button>
            </div>
            <div className="row">
                <Button value="0.25" onClick={handleActive} onBlur={handleBlur}>25%</Button>
                <Button value="0.5" onClick={handleActive} onBlur={handleBlur}>50%</Button>
                <input value={tipPercent} type="number" min="1" step="1" id='tipInput' placeholder="Custom" onChange={handleChange} />
            </div>
        </div>
    )
}

export default TipPercent
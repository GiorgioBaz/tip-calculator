
import Button from "../UI/Button/Button";

import './TipPercent.css'

const TipPercent = (props) => {
    //TODO: Figure out how to fix onBlur issues with classes

    const handleChange = (e) => {
        props.setTip(e.target.value, "input")
    }

    const handleActive = (e) => {
        e.target.classList.toggle('activeBtn')
        props.setTip(e.target.value, "btn")
    }

    const handleBlur = (e) => {
    }

    const handleTipType = () => {
        props.setTip(0, "btn")
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
                <input value={props.value} type="number" min="1" step="1" id='tipInput' placeholder="Custom" onClick={handleTipType} onChange={handleChange} />
            </div>
        </div>
    )
}

export default TipPercent
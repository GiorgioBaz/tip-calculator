import { useState } from 'react'
import './PeopleNo.css'

const PeopleNo = (props) => {
    const [err, setErr] = useState(false)

    const handleChange = (e) => {
        if (+e.target.value >= 0) {
            e.target.classList.remove('invalid')
            props.setPeople(e.target.value)
            setErr(false)
        } else {
            props.setPeople(0)
        }
    }

    const handleBlur = (e) => {
        if (+e.target.value <= 0) {
            e.target.classList.add('invalid')
            setErr(true)
        }
    }

    return (
        <div className="peopleDiv">
            <label htmlFor="peopleInput">Number of People {err && <label id="errMsg" htmlFor="peopleInput">Cant be zero</label>}</label>
            <input value={props.value} type="number" min="1" step="1" id='peopleInput' onBlur={handleBlur} onChange={handleChange} />
        </div>
    )
}

export default PeopleNo
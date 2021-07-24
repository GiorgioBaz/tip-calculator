import { useState } from "react";

import './PeopleNo.css'

const PeopleNo = (props) => {
    const [people, setPeople] = useState(0)

    const handleChange = (e) => {
        setPeople(e.target.value)
    }

    return (
        <div className="peopleDiv">
            <label htmlFor="peopleInput">Number of People</label>
            <input value={people} type="number" min="1" step="1" id='peopleInput' onChange={handleChange} />
        </div>
    )
}

export default PeopleNo
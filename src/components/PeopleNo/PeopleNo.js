import './PeopleNo.css'

const PeopleNo = (props) => {
    //TODO: Add validation into this component for 0 people 

    const handleChange = (e) => {
        props.setPeople(e.target.value)
    }

    return (
        <div className="peopleDiv">
            <label htmlFor="peopleInput">Number of People</label>
            <input value={props.value} type="number" min="1" step="1" id='peopleInput' onChange={handleChange} />
        </div>
    )
}

export default PeopleNo
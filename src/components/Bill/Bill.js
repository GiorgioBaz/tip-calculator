import './Bill.css'

const Bill = (props) => {

    const handleChange = (e) => {
        props.onChange(e.target.value)
    }
    return (
        <div className="billDiv">
            <label htmlFor="#billInput">Bill</label>
            <input value={props.value} type="number" min="1" step="any" id='billInput' onChange={handleChange} />
        </div>
    )
}

export default Bill
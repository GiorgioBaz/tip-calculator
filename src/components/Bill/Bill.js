import { useState } from 'react'

import './Bill.css'

const Bill = () => {
    const [bill, setBill] = useState(0)

    const handleChange = (e) => {
        setBill(e.target.value)
    }
    return (
        <div className="billDiv">
            <label htmlFor="#billInput">Bill</label>
            <input value={bill} type="number" min="1" step="any" id='billInput' onChange={handleChange} />
        </div>
    )
}

export default Bill
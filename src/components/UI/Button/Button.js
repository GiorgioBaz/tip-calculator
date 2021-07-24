import './Button.css'

const Button = (props) => {
    return (
        <button className={`btn ${props.className}`} value={props.value}> {props.children} </button>
    )
}

export default Button
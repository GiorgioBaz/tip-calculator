import './Button.css'

const Button = (props) => {
    return (
        <button className='btn' value={props.value} onClick={props.onClick} onBlur={props.onBlur}> {props.children} </button>
    )
}

export default Button
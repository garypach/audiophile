import Link from 'next/link'
const Button = (props) => {
    return(
        <div className={`button-container ${props.buttontype}`}>
            <p>{`${props.buttontext}`}</p>
        </div>
    )
}

export default Button
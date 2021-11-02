import Link from 'next/link'
import Button from '../button/button'
const OtherProducts = (props) => {
    return(
        <Link href={`/${props.producttype}/${props.slug}`}>
            <a>
            <Button buttontext="See Product" buttontype="buttonorange"/>
            </a>
        </Link>
    )
}

export default OtherProducts
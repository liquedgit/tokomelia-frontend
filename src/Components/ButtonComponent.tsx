import "./ComponentCss/ButtonComponent.css"
import {Link} from "react-router-dom";
export default function ButtonComponent(props:any){
    return(
        <>
            <Link to={props.to}>
                <div className={`${props.style} button`}>
                    {props.children}
                </div>
            </Link>
        </>
    )
}
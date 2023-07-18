import "./ComponentCss/Navbarcomponent.css"
import ButtonComponent from "./ButtonComponent.tsx";
import {getJwtToken} from "../Helper/jwt.tsx";
export default function NavbarComponent(){

    const jwt = getJwtToken()

    return(
        <>
            <div className={"navbar"}>
                <div className={"left"}>
                    <h1 className={"color-green"}>TokoMeLia</h1>
                </div>
                {
                    !jwt && (
                        <div className={"right"}>
                            <ButtonComponent to={"/login"} style={"child color-green p-8 border-green bg-white rounded-md"}>
                                Login
                            </ButtonComponent>
                            <ButtonComponent to={"/register"} style={"child color-white border-green bg-green rounded-md p-8"}>
                                Register
                            </ButtonComponent>
                        </div>
                    )
                }
            </div>
        </>
    )
}
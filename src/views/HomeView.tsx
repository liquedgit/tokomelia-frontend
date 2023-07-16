import NavbarComponent from "../Components/NavbarComponent.tsx";

export default function HomeView(){
    return(
        <>
            <NavbarComponent/>
            <div className={"view-layout"}>
                <h1>this is home page</h1>
            </div>
        </>
    )
}
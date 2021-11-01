import { MDBBtn, MDBCollapse, MDBContainer } from "mdb-react-ui-kit";
import { useState } from "react";


export function Delivery() {
    const [showBelivered, setShowBelivered] = useState(false);
    const toggleBelivered = () => setShowBelivered(!showBelivered);
    const [showReceve, setShowReceve] = useState(false);
    const toggleReceve = () => setShowReceve(!showReceve);
    const [showAlternative, setShowAlternative] = useState(false);
    const toggleAlternative = () => setShowAlternative(!showAlternative);

    return (
        <MDBContainer className="container">
            <MDBBtn onClick={toggleBelivered}>will all mijn itemas be belivered togehter?</MDBBtn>
            <MDBCollapse show={showBelivered}>
                <p>In most cases your whole order will be delivered at the same time. The following exceptions
                    apply:</p>
                <h3>LargeItems</h3>
                <p>Delayed items will be despatched as soon as stock becomes available. You can track the progress of
                    your order by going to My Account and selecting ‘Order Tracking’ on the left side, under "Account
                    Options".</p>
            </MDBCollapse>
            <MDBBtn onClick={toggleReceve}>When i receve delayed items?</MDBBtn>
            <MDBCollapse show={showReceve}>
                <p>When your item becomes available for despatch, we will email you so you can track your order</p>
            </MDBCollapse>
            <MDBBtn onClick={toggleAlternative}>Can I have order delivered to an alternative or wordk adress?</MDBBtn>
            <MDBCollapse show={showAlternative}>
                <p>To change your delivery address or add a new delivery address, follow these steps:
                    Log in to My Account using your email address or customer number and password.
                    Select the ‘delivery address’ option from the menu on the left-hand side.
                    Here you will be able to add up to five addresses to your account.</p>
            </MDBCollapse>
        </MDBContainer>
    )
}

export default Delivery;
import { MDBBtn, MDBCol, MDBCollapse, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";
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
            <MDBRow>
                <MDBCol md={2}/>
                <MDBCol md={8} className="text-center">
                    <br/> <br/> <br/>
                    <div className="text-center md-4">
                        <h3 className="cyan-text">will all mijn itemas be belivered togehter?
                            <MDBIcon
                                icon='caret-down'
                                className='cyan-text'
                                size='20'
                                style={{cursor: 'pointer'}}
                                onClick={toggleBelivered}
                            ></MDBIcon>
                        </h3>
                        <MDBCollapse show={showBelivered}>
                            <p>In most cases your whole order will be delivered at the same time. The following exceptions
                                apply:</p>
                            <h3 className="red-text">LargeItems</h3>
                            <p>Delayed items will be despatched as soon as stock becomes available. You can track the progress
                                of
                                your order by going to My Account and selecting ‘Order Tracking’ on the left side, under
                                "Account
                                Options".</p>
                        </MDBCollapse>
                    </div>
<br/>
                    <div className="text-center md-4">
                        <h3  className="cyan-text">When i receve delayed items?
                            <MDBIcon
                                icon='caret-down'
                                className='cyan-text'
                                size='20'
                                style={{cursor: 'pointer'}}
                                onClick={toggleReceve}
                            ></MDBIcon>
                        </h3>

                        <MDBCollapse show={showReceve}>
                            <p>When your item becomes available for despatch, we will email you so you can track your order</p>
                        </MDBCollapse>
                    </div>
<br/>
                    <div className="text-center md-4">
                        <h3 className="cyan-text">Can I have order delivered to an alternative or wordk adress?
                            <MDBIcon
                                icon='caret-down'
                                className='cyan-text'
                                size='20'
                                style={{cursor: 'pointer'}}
                                onClick={toggleAlternative}
                            />
                        </h3>
                        <MDBCollapse show={showAlternative}>
                            <p>To change your delivery address or add a new delivery address, follow these steps:
                                Log in to My Account using your email address or customer number and password.
                                Select the ‘delivery address’ option from the menu on the left-hand side.
                                Here you will be able to add up to five addresses to your account.</p>
                        </MDBCollapse>
                    </div>
                </MDBCol>


            </MDBRow>


        </MDBContainer>
    )
}

export default Delivery;
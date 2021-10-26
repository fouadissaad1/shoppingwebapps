import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

export function Services() {
    return (<MDBContainer fluid>
            <MDBRow>
                <MDBCol size={3}/>
                <MDBCol size={6}>
                    <h3>Our Services</h3>
                    <h2>Services and experiences</h2>
                    <p>Expert advicce and inspiration, whenever you neet it</p>
                    <p>We're pleased to offer the service you know and love both in sore and virtually, so you can
                        expert advicie wheren you are and hower you choose</p>
                </MDBCol>
                <MDBCol size={3}/>
            </MDBRow>
            <MDBRow>
                <MDBCol size={3}></MDBCol>
                <MDBCol size={3}>
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                        className="img-fluid rounded-pill"
                        alt=""
                    />
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                        className="img-fluid rounded-pill"
                        alt=""
                    />
                </MDBCol>
                <MDBCol size={3}>
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                        className="img-fluid rounded-pill"
                        alt=""
                    />
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                        className="img-fluid rounded-pill"
                        alt=""
                    />
                </MDBCol>
                <MDBCol size={3}></MDBCol>
            </MDBRow>
            <hr/>
            <MDBRow>
                <MDBCol size={3}></MDBCol>
                <MDBCol size={3}>
                    <h3>John Lewis Rentals Powered by fat LLALMA</h3>
                    <p>Rent our furniture, whenever youneed it, to create a look you love without the momitment</p>
                    <p>find out more Link</p>
                </MDBCol>
                <MDBCol size={3}>
                    <img
                        src="https://mdbootstrap.com/img/new/standard/city/047.jpg"
                        class="img-fluid rounded"
                        alt=""
                    />
                </MDBCol>
                <MDBCol size={3}></MDBCol>
            </MDBRow>
            <hr/>
        </MDBContainer>

    )
}

export default Services;
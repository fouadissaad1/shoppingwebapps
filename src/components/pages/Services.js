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
                        src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fservices%2Fbaby.JPG?alt=media&token=92d5043d-310b-41db-8624-05a99942c446"
                        className="img-fluid rounded-pill"
                        alt=""
                    />
                    <br/>

                </MDBCol>
                <MDBCol size={3}>
                     <img
                        src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fservices%2Fbeauty.JPG?alt=media&token=4b10e031-7bb9-404e-b4fb-82234a845004"
                        className="img-fluid rounded-pill"
                        alt=""
                    />
                </MDBCol>
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
                        className="img-fluid rounded"
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
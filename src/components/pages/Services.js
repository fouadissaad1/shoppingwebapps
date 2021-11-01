import { MDBCol, MDBContainer, MDBIcon, MDBRow } from "mdb-react-ui-kit";

export function Services() {
    return (<MDBContainer fluid>
            <MDBRow>
                <MDBCol md={3}/>
                <MDBCol md={6}>
                    <h1 className="text-center md-4">
                        <MDBIcon icon="servicestack"/>
                        Our Services</h1>
                    <br/>
                    <div>
                        <h2 className="text-left red">Services and experiences</h2>
                        <p>Expert advicce and inspiration, whenever you neet it</p>
                        <p>We're pleased to offer the service you know and love both in sore and virtually, so you can
                            expert advicie wheren you are and hower you choose</p>
                    </div>
                    <div className="grey-text">
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fservices%2Fbaby.JPG?alt=media&token=92d5043d-310b-41db-8624-05a99942c446"
                                className="img-fluid rounded-pill"
                                alt=""
                            />
                            <img
                                src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fservices%2Fbeauty.JPG?alt=media&token=4b10e031-7bb9-404e-b4fb-82234a845004"
                                className="img-fluid rounded-pill"
                                alt=""
                            />

                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>

    )
}

export default Services;
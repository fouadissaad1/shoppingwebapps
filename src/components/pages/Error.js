import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useHistory } from "react-router-dom";

function Error() {
    const history = useHistory();
    const routeChange = () => {
        const path = `/`;
        history.push(path);
    }
    return <>
        <br/>
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol size={3}></MDBCol>
                <MDBCol size={1}>
                    <h1 style={{color: "red"}}>4<h1>0</h1><h1 style={{color: "red"}}>4</h1></h1>
                </MDBCol>
                <MDBCol size={6}>
                    <br/><br/>
                    <p>
                        Oooooops! Looks like nothing was found at this location.
                        Maybe try on of the links below, click on the top menu
                        or try a search?
                    </p>

                    <img width={800} height={400} style={{alignItems: "center"}}
                         src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Ferror%2F404-error-page-not-found-plug-graphic-vector-19997583.jpg?alt=media&token=2cccf0e9-8c03-4adf-93f3-c09eb315549c"/>

                    <MDBBtn to={"/"} onClick={routeChange}>Home</MDBBtn>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    </>
}

export default Error
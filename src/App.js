import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";




function App() {
  return (
      // eslint-disable-next-line react/jsx-no-undef
      <>
          <MDBBtn color="primary">Primary</MDBBtn>
          <MDBBtn>Default</MDBBtn>
          <MDBBtn color="secondary">Secondary</MDBBtn>
          <MDBBtn color="success">Success</MDBBtn>
          <MDBBtn color="info">Info</MDBBtn>
          <MDBBtn color="warning">Warning</MDBBtn>
          <MDBBtn color="danger">Danger</MDBBtn>
      </>
  );
}

export default App;

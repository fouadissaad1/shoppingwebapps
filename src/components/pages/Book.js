import { MDBBtn, MDBCol, MDBContainer, MDBIcon, MDBInput, MDBRow } from "mdb-react-ui-kit";
import emailjs from 'emailjs-com';


const Book = () => {
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_8f7xlud',
            'template_iubtfdd',
            e.target,
            'user_1mepAtzDb4GjUHFo2wNyS')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <MDBContainer fluid>
            <MDBRow>
                <MDBCol md="3"/>
                <MDBCol md="6">
                    <h1 className="text-center md-4">
                        <MDBIcon icon="book-open"/>
                        Booking and send mail</h1>
                    <form onSubmit={sendEmail}>
                        <MDBInput name="name" type="text" placeholder="Type your name and Firtname" required/> <br/>
                        <div className="form-group">
                            <select name="category" id="categorys" className="browser-default custom-select" required>
                                <option> Chose your option</option>
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                                <option value="Childeren">Childeren</option>
                            </select>
                            <br/> <br/>
                        <div>
                            <select name="service" id="services" className="browser-default custom-select" required>
                                <option>chose your option</option>
                                <option value="Buy">Buy</option>
                                <option value="Meet">Meet</option>
                                <option value="Delivery">Delivery</option>
                            </select>
                        </div>
                        <br/>
                            <div className="grey-text">
                                <label>Date:
                                    <MDBInput type={"date"} name={"date"} required/>
                                </label>
                                <br/>
                                <label>Time:
                                    <MDBInput type={"time"} name={"time"} required/>
                                </label>
                                <br/>
                                <label  htmlFor="exampleFormControlTextarea1">Email: <br/>
                                    <MDBInput type="email" name={"user_email"} placeholder={"What is you' re mail?"} required/>
                                </label> <br/>
                                <div>
                                    <label>Message:<br/>
                                        <textarea name={"message"}  className="form-control"
                                                  id="exampleFormControlTextarea1"
                                                  rows="7"
                                                  placeholder={"what is you're message?"} required/>
                                    </label> <br/>
                                </div>
                            </div>

                        </div>
                        <MDBBtn value={"Send"} type={"submit"}>Send</MDBBtn>
                    </form>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}

export default Book;
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
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
                <MDBCol size={2}></MDBCol>
                <MDBCol size={6}>
                    <h1>Booking and send mail</h1>
                </MDBCol>
                <MDBCol size={2}></MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol size={2}></MDBCol>
                <MDBCol size={6}>
                    <form onSubmit={sendEmail}>
                        <label>Name: <br/>
                            <input name="name" type="text" required/> <br/>
                        </label>
                        <br/>
                        <label htmlFor="category">Category:</label>
                        <select name="category" id="categorys" required>
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Childeren">Childeren</option>
                        </select>
                        <br/>

                        <label htmlFor="service">Service:</label>
                        <select name="service" id="services" required>
                            <option value="Buy">Buy</option>
                            <option value="Meet">Meet</option>
                            <option value="Delivery">Delivery</option>
                        </select>
                        <br/>
                        <label>Date:
                            <input type={"date"} name={"date"} required/>
                        </label>
                        <br/>
                        <label>Time:
                            <input type={"time"} name={"time"} required/>
                        </label>
                        <br/>
                        <label>Email: <br/>
                            <input type="email" name={"user_email"} placeholder={"What is you' re mail?"} required/>
                        </label> <br/>
                        <label>Message:<br/>
                            <textarea name={"message"} placeholder={"what is you're message?"} required/>
                        </label> <br/>
                        <button value={"Send"} type={"submit"}>Send</button>
                    </form>
                </MDBCol>
                <MDBCol size={2}>

                </MDBCol>

            </MDBRow>
        </MDBContainer>
    );
}

export default Book;
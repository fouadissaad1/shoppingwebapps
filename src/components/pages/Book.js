import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
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
        <MDBContainer>
            <MDBRow><h1>Booking and send mail</h1></MDBRow>
            <MDBRow>
                <form onSubmit={sendEmail}>
                    <label>Name: <br/>
                        <input name="name" type="text" required/> <br/>
                    </label><br/>
                    <label>Email: <br/>
                        <input type="email" name={"user_email"} placeholder={"What is you' re mail?"} required/>
                    </label> <br/>
                    <label>Message:<br/>
                        <textarea name={"message"} placeholder={"what is you're message?"} required/>
                    </label> <br/>
                    <button value={"Send"} type={"submit"}>Send</button>
                </form>
            </MDBRow>
        </MDBContainer>
    );
}

export default Book;
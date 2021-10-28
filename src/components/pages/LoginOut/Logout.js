import firebaseConfig from "../../../services/firestore";
import { useHistory } from "react-router-dom";

function Logout() {
    const history = useHistory();
    const signOut = async (e) => {
        e.preventDefault();
        await firebaseConfig.auth().signOut().then(function () {
            console.log("succesfully signed out.")
        }).catch(function (error) {
            console.log(error)
            console.log("an Error occured")
        });
        history.push("/")
    }
    return (
        <div>
            <h1>Welcome</h1>

            <button
                className="profile-box-logout"
                type="submit"
                name="button"
                onClick={signOut}
            >
                Logout
            </button>
        </div>
    )
}

export default Logout
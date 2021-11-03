import './home.css'
import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
function Home() {
    return (

        <>
            <MDBContainer fluid className="images">
            </MDBContainer>
            <br/>
            <MDBContainer fluid>
                    <div className="row">
                        <div className="col-12 intro">
                            <h1>Shop By Department...!</h1>
                        </div>
                    </div>
            </MDBContainer>
            <br/>
            <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card greenArticle">
                                <div className="card-body ">
                                    <h5 className="card-title">
                                        <NavLink to="/Women" >Men</NavLink>
                                    </h5>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fwelcome%2Fistockphoto-1065840316-612x612.jpg?alt=media&token=b82f298e-e542-4c01-b920-4fa577a0e03a"
                                        className="img-fluid rounded-pill"
                                        alt=""
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card greenArticle">
                                    <div className="card-body ">
                                        <h5 className="card-title">
                                            <NavLink to="/Women" >Women</NavLink>
                                        </h5>
                                        <img
                                            src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fwelcome%2Fshopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera-with-shopping-bag-blue-pastel-background-copy-space_1258-856.jpg?alt=media&token=48abf0f6-c88f-4bd1-b22c-8152295a3805"
                                            className="img-fluid rounded-pill"
                                            alt=""
                                        />

                                    </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card greenArticle">
                                <div className="card-body ">
                                    <h5 className="card-title">
                                        <NavLink to="/Children" >Children</NavLink>
                                        <br/>
                                        <br/>

                                    </h5>
                                    <img
                                        src="https://firebasestorage.googleapis.com/v0/b/shopping-ef663.appspot.com/o/images%2Fwelcome%2Fkids-category-300x300.jpg?alt=media&token=b70b0c05-933c-4bff-a87f-64636e66574f"
                                        className="img-fluid rounded-pill"
                                        alt=""
                                    />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
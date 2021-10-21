import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">CodeCheef</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav ms-auto">
                            <li className="navbar-item">
                                <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to="/Men" className="nav-link">MEN'S WEAR</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to="/Women" className="nav-link">WOMEN'S WEAR</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to="/Children" className="nav-link">CHILDREN</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to="/About" className="nav-link">About</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                            </li>
                            <li className="navbar-item">
                                <NavLink to="/Login" className="nav-link">Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;
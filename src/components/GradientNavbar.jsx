import logo from '../assets/images/Tide.png';
import github from '../assets/images/github.png';
import dev from '../assets/images/dev.png';
import contact from '../assets/images/contact.png';

export default function GradientNavbar() {
    return (
        <nav className="bg-white fixed-top navbar navbar-expand-lg px-4 py-1 shadow">
            <a className="navbar-brand d-flex align-items-center p-0" href="/">
                <img
                    src={logo}
                    alt="ColorTide Logo"
                    height="40"
                    className="d-inline-block align-text-top"
                />
            </a>

            <button
                className="btn-outline-light navbar-toggler shadow-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContent"
                aria-controls="navbarContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center gap-3">
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="https://github.com/sejal0115"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={github} alt="GitHub" width="24" height="24" title='Github' />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            className="nav-link"
                            href="https://dev.to/codedbysejal"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img src={dev} alt="Dev.to" width="24" height="24" title='Dev.to' />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="mailto:sejalmahadik192@gmail.com" >
                            <img src={contact} alt="Contact" width="24" height="24" title='Hire Me' />
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

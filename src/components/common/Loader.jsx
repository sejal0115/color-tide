import loadGif from '../../assets/videos/Tide.gif';

export default function Loader() {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <img src={loadGif} alt="ColorTide Logo" width="350" className="mb-3" />
            <h4 className="fw-bold mb-2 fst-italic">"Design your wave of color"</h4>
            <div className="mt-5 spinner-border text-dark" role="status" />
        </div>
    );
}

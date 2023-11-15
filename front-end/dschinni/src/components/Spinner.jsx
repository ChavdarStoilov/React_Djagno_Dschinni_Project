// import syles from "../CCSModules/spinner.module.css"

export default function SpinnerModal({ msg }) {
    return (
        <div className="spinner-container">
            <div className="loading-spinner"></div>
            <h1>{msg}</h1>
        </div>
    );
}
